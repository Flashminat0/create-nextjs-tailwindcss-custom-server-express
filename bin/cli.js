#!/usr/bin/env node

const {execSync} = require('child_process');

const runCommand = (command) => {
    try {
        execSync(command, {stdio: 'inherit'});
    } catch (e) {
        console.log(`Failed to run command: ${command}`, e);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Flashminat0/create-nextjs-tailwindcss-custom-server-express.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Creating new project ${repoName}`);
const gitCheckout = runCommand(gitCheckoutCommand);
if (!gitCheckout) {
    console.log('Failed to clone repo');
    process.exit(-1);
}

console.log("Installing dependencies for project...");
const installDeps = runCommand(installDepsCommand);
if (!installDeps) {
    console.log('Failed to install dependencies');
    process.exit(-1);
}

console.log('Successfully created project');
process.exit(0);





