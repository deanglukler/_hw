var fs = require('fs')
var path = require('path')
var dir = path.resolve('./')
var replaceTextRecursive = (oldText, newText, dir) => {
  var scanAndReplace = (file) => {
    const nxtFile = file.replace(oldText, newText)
    if (nxtFile !== file) {
      fs.renameSync(file, nxtFile)
    }

    if (fs.lstatSync(nxtFile).isDirectory()) {
      var fileNames = fs.readdirSync(nxtFile)
      fileNames.forEach(fileName => {
        const filePath = `${nxtFile}/${fileName}`
        scanAndReplace(filePath)
      })
    }
  }
  scanAndReplace(dir)
}


