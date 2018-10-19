function prompt(question, callback) {
    var stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(question);

    stdin.once('data', function (data) {
        callback(data.toString().trim());
    });
}

// Use case

prompt('Whats your name?', function (input) {
    console.log(input);

    // this will end the script.. which is necessary, must be last though
    process.exit();
});