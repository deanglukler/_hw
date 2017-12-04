### ssh keys

[setup tutorial](https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys)

### copy ssh key to clipboard

pbcopy < ~/.ssh/id_rsa.pub


### git bare repo

// init bare git repo
git init --bare project.git

### git subtree

```
git subtree add —prefix [path_to_folder]
git subtree pull —prefix [path_to_folder] [remote] [remote-branch]
git subtree push —prefix [path_to_folder] [remote] [remote-branch]
```

### git post-receive hook

```
#!/usr/bin/env ruby
# post-receive

# 1. Read STDIN (Format: "from_commit to_commit branch_name")
from, to, branch = ARGF.read.split " "

# 2. Only deploy if master branch was pushed
if (branch =~ /master$/) == nil
    puts "Received branch #{branch}, not deploying."
    exit
end

# 3. Copy files to deploy directory
deploy_to_dir = File.expand_path('../deploy')
`GIT_WORK_TREE="#{deploy_to_dir}" git checkout -f master`
puts "DEPLOY: master(#{to}) copied to '#{deploy_to_dir}'"

# 4.TODO: Deployment Tasks
# i.e.: Run Puppet Apply, Restart Daemons, etc
```

### chmod make file executable

chmod +x [filename]


### type of object function

```
function type (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}
```

### jQuery cdn

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
```

### css clearfix clearfloat

```css
.group:after {
  content: "";
  display: table;
  clear: both;
}
```


### curl

[curl info gist](https://gist.github.com/subfuzion/08c5d85437d5d4f00e58)



### curl see ip address

```
curl ifconfig.me
```

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

### random hex code generator

```
'#' + (function co(lor){   return (lor +=
  [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
  && (lor.length == 6) ?  lor : co(lor); })('');
```

### homebrew brew

```
brew services list

//will list brew services

// Run service. Don't start at login (nor boot):

$ brew services run mysql

// Stop service mysql:

$ brew services stop mysql

// Restart service mysql:

$ brew services restart mysql

// List all services managed by brew services

$ brew services list

// Run/start/stop/restart all available services

$ brew services run|start|stop|restart --all
```

### git rm cache

```
git rm -r --cached .
```




