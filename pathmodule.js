const path=require("node:path")
console.log(path.basename(__filename))
console.log(path.basename(__dirname))
console.log(path.extname(__filename))
console.log(path.extname(__dirname))
console.log(path.parse(__filename))
console.log(path.format(path.parse(__filename)))
console.log(path.isAbsolute(__filename))
console.log(path.join("/file1","file2","add.js"))
console.log(path.join(__dirname,"data.josn"))
console.log(path.resolve("/file1","//file2","../add.js"))


