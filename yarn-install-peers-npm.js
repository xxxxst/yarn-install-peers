#!/usr/bin/env node

const { execSync } = require('child_process');
const { getPeerDepCmd } = require('./util');

function main(args) {
	var strPkg = getPeerDepCmd();
	var strCmd = "npm install --no-save --no-package-lock " + strPkg;
	// console.info("--", strCmd);
	try {
		execSync(strCmd, { stdio: "inherit" });
	} catch (ex) { }
}

main(process.argv);
