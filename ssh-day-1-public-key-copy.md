### ssh keys

https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys


### copy public key to server
cat ~/.ssh/id_rsa.pub | ssh username@remote_host "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"


### copy ssh key to clipboard
pbcopy < ~/.ssh/id_rsa.pub