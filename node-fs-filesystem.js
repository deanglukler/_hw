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


// -------------
// open file (create file)
fs.openSync(path, flags[, mode])



// -------------
// close file
fs.closeSync(fd)



// -------------
// write to file
fs.writeSync(fd, string[, position[, encoding]])
// You need to wait for the callback to ensure that the buffer is written to disk. It's not buffered.

fs.writeFileSync(file, data[, options])
// All data must be stored at the same time; you cannot perform sequential writes.

fs.createWriteStream(path, [options])
// Creates a WriteStream, which is convenient because you don't need to wait for a callback. But again, it's not buffered.





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












