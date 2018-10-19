var fs = require('fs')
var path = require('path')
var rootDir = path.resolve('./')
var replaceTextRecursive = (oldText, newText, dir = rootDir) => {
  var scanAndReplace = file => {
    const nxtFile = file.replace(oldText, newText).trim()
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

var addTextRecurStart = (newText, dir = rootDir) => {
  var scanAndReplace = file => {
    if (fs.lstatSync(file).isDirectory()) {
      var fileNames = fs.readdirSync(file)
      fileNames.forEach(fileName => {
        const filePath = `${file}/${fileName}`
        scanAndReplace(filePath)
      })
    }
    var baseName = path.basename(file)
    if (baseName[0] === '.') {
      return
    }
    var nxtFileBaseName = `${newText}${baseName}`
    var nxtFile = file.replace(baseName, nxtFileBaseName)
    if (file !== dir) {
      fs.renameSync(file, nxtFile)
    }
  }
  scanAndReplace(dir)
}
