const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'customInspector.js'); 
const destinationPath = path.join(__dirname, 'build', 'customInspector.js'); 

fs.copyFile(sourcePath, destinationPath, (err) => {
    if (err) {
        console.error("Error copying customInspector.js to build folder:", err);
    } else {
        console.log("Successfully copied customInspector.js to build folder.");
    }
});