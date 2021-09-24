const pwdCommand = process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') {
        const cwd = process.cwd(); 
        process.stdout.write(cwd);
    }
    
    process.stdout.write('\nprompt > ');
});

module.exports.pwd = pwdCommand;