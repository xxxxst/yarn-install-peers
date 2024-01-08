
const fs = require('fs');
const { execSync } = require('child_process');
const { getPeerDepCmd } = require('./util');

function main(args) {
	var strExe = "";
	var strLocalExe = 'node_modules/yarn/bin/yarn.js';
	if (fs.existsSync(strLocalExe)) {
		strExe = "node " + '"' + strLocalExe + '"';
	} else {
		strExe = "yarn";
	}
	// console.info("--", strLocalYarn);
	// console.info("--", strExe);
	var strPkg = getPeerDepCmd();
	var strCmd = strExe + " add --peer--ignore-workspace-root-check --pure-lockfile " + strPkg;
	// console.info("--", strCmd);
	try {
		execSync(strCmd, { stdio: "inherit" });
	} catch (ex) { }
}

main(process.argv);
