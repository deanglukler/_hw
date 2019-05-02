# install bundler based on gemfile version
gem install bundler -v $(tail -1 Gemfile.lock)



# follow the makeshift dev logs
tail -f log/development.log