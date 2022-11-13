cd /usr/lib
find /mnt/usr/lib -mindepth 1 -depth -type d -printf "%P\n" | while read dir; do mkdir -p "$dir"; done
find /mnt/usr/lib -type f -printf "%P\n" | while read file; do ln -s "/mnt/usr/lib/$file" "$file"; done