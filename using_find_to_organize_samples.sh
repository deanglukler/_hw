first of all.. hi..

use gfind on mac instead of find 
to install: brew install findutils

that way we can use the -printf flag

ex... to print just the file name (actually this doesn't work)
it prints the whole path
gfind . -printf "%p\n"

Using Upper Case "%P\n" will print just the relative path

Here's more on printf
%n Number of hard links to file.
%p File's name.
%P File's name with the name of the starting-point under which it was found removed.
%s File's size in bytes.
%t File's last modification time in the format returned by the C `ctime' function.
Are there any other options that can be used?


and here's some snippet i found that will strip to just the filename
Same as

$ find . -name "*.sh" | xargs -i basename {}

And using sed:

$ find . -name "*.sh" | sed 's!.*/!!'

i.e. replace all characters until last / by nothing (here ! is used as the sed delimiter instead of the usual /)



OK.

It turns out that you don't need to worry about getting just the filename
The full path is fine.

this is the command I used
find $MASTERSAMPLES -type f -regex ".*kick[^/]*.wav" | while read file; do ln "$file" /Volumes/bean\ stock/music_production/samples_links_kicks; done
 






























end