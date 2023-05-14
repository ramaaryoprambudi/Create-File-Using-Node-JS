const fs = require("fs");
const folderName =
  process.argv[2] || "Project"; /*File Default Name Is Project*/

try {
  fs.mkdirSync(folderName);

  // Custom your file and folder in here
  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/app.js`, "");
  fs.writeFileSync(`${folderName}/app.css`, "");
  console.log("Successfully created file and folder");
} catch (error) {
  console.log("Failed to create files");
}
