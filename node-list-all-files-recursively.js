/* eslint-disable no-var */
const fs = require('fs');
const path = require('path');

// List all files in a directory in Node.js recursively in a synchronous fashion
var walkSync = function(dir, filelist) {

  if( dir[dir.length-1] != '/') dir=dir.concat('/');
  // const files = fs.readdirSync(path.resolve(process.cwd(), dir));
  // use this for absolute directories
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(file => {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist);
    }
    else {
      filelist.push(dir+file);
    }
  });
  return filelist;
};

console.log(JSON.stringify(walkSync('./app/javascript'), null, 2));