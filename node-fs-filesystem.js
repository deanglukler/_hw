// read contents of dir
fs.readdir(path[, options], callback)

// print out files in current dir
fs.readdir('./', (err, files) => {
  for (file of files) {
    console.log(file)
  }
})

// or sync..
fs.readdirSync(path[, options])
// Returns: <string[]> An array of filenames excluding '.' and '..'.

// ---------------
// rename file
fs.rename(oldPath, newPath, callback)

// or synchronously if you like it like that
fs.renameSync(oldPath, newPath)

// ----------------
// copy file
// destination.txt will be created or overwritten by default.
fs.copyFile('source.txt', 'destination.txt', (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
});

// ----------------
// delete file

// synchronously
fs.unlinkSync(path)

// ----------------
// path exists?

fs.existsSync(path)
// return true or false


// ---------------
// is directory?
fs.lstatSync(curPath).isDirectory()
// returns boolean

// -------------
// make directory

fs.mkdirSync(path[, mode])




// function to rm -rf
    var deleteFolderRecursive = function(path) {
      if (path === '/') {
        console.log('lets not delete our computer..')
        return
      }
      if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function(file, index) {
          var curPath = path + "/" + file;
          if (fs.lstatSync(curPath).isDirectory()) {
            // recurse
            deleteFolderRecursive(curPath);
          } else {
            // delete file
            fs.unlinkSync(curPath);
          }
        });
        fs.rmdirSync(path);
      }
    };












