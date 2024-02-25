const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'build', 'index.html');
const scriptTag = '\n<script src="customInspector.js"></script>\n';

fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading index.html:", err);
        return;
    }

    if (data.includes(scriptTag.trim())) {
        console.log("Script already injected.");
        return;
    }

    const bodyStartIndex = data.indexOf('<body>');
    const firstScriptIndex = data.indexOf('<script', bodyStartIndex);
    let result;
    if (firstScriptIndex !== -1 && firstScriptIndex < data.indexOf('</body>')) {
        result = data.slice(0, firstScriptIndex) + scriptTag + data.slice(firstScriptIndex);
    } else {
        result = data.replace('<body>', '<body>' + scriptTag);
    }
    fs.writeFile(indexPath, result, 'utf8', err => {
        if (err) {
            console.error("Error writing back to index.html:", err);
        } else {
            console.log("Successfully injected the script into index.html.");
        }
    });
});
