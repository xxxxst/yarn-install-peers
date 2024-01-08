
const fs = require('fs');
const path = require('path');

module.exports = {
	getPeerDepCmd: function() {
		var rootDir = process.cwd();
		var pkgPath = path.join(rootDir, 'package.json');
		var strText = "";
		try {
			strText = fs.readFileSync(pkgPath, 'utf-8');
		} catch (ex) { return ""; }
		var obj = null;
		try {
			obj = JSON.parse(strText);
		} catch (ex) { return ""; }
		if (!obj || !obj.peerDependencies) {
			return "";
		}
		var strPkg = "";
		for (var name in obj.peerDependencies) {
			var version = obj.peerDependencies[name];
			strPkg += '"' + name + "@" + version + '"' + " ";
		}
		return strPkg;
	}
}
