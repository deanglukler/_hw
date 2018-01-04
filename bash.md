### chmod make file executable

chmod +x [filename]

### show hidden files

```
defaults write com.apple.finder AppleShowAllFiles YES
```

### print environment variables
```
printenv
```

### cp copy folder contents to new folder

```
cp -r ~/folder1/. ~/new_folder1
```

### mv

```
mv * .. //moves everything (in current directory) up one directory

mv partials/variables.scss . //moves variables.scss (which is inside partials folder) to current directory (which is the .)

mv * newinside // moves everything in current dir into newinside (with one exception, itself)
```