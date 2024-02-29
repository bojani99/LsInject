const fs = require('fs');
const path = require('path');

// Define the paths
const indexPath = path.join(__dirname, 'dist', 'es6', 'index.html');
const scriptTag = '\n<script src="./js/lightning-inspect.js"></script>\n';

// Read the index.html file
fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading index.html:", err);
        return;
    }

    // Check if the script is already injected to prevent duplication
    if (data.includes(scriptTag)) {
        console.log("Script already injected.");
        return;
    }

    // Inject the customInspector.js script before the closing body tag
    const result = data.replace('</body>', scriptTag);

    // Write the modified content back to index.html
    fs.writeFile(indexPath, result, 'utf8', err => {
        if (err) {
            console.error("Error writing back to index.html:", err);
        } else {
            console.log("Successfully injected the script into index.html.");
        }
    });
});
