const fs = require('fs');
const path = require('path');

// Keep the source path as it is, assuming customInspector.js is in the same directory as this script
const sourcePath = path.join(__dirname, 'lightning-inspect.js'); 

// Update the destination path to point to 'dist/es6' instead of 'build'
const destinationPath = path.join(__dirname, 'dist', 'es6', 'js', 'lightning-inspect.js'); 

fs.copyFile(sourcePath, destinationPath, (err) => {
    if (err) {
        console.error("Error copying customInspector.js to dist/es6 folder:", err);
    } else {
        console.log("Successfully copied customInspector.js to dist/es6 folder.");
    }
});
