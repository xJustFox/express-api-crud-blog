const fs = require('fs');
const path = require('path');

// Funzione per scrivere dentro norrisDb.js
const writeJSON = (nameFile, newData) => {
    const filePath = path.join(__dirname,'db', `${nameFile}.json`);
    const fileString = JSON.stringify(newData);
    fs.writeFileSync(filePath, fileString);
};

module.exports = {
    writeJSON
}