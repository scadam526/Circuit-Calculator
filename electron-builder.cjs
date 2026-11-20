// electron-builder configuration.
//
// The release version lives in package.json ("version", which npm requires to
// be three-part semver, e.g. 1.0.0). The version *name* used in the installer
// filename drops a trailing ".0" patch: 1.0.0 -> v1.0, 1.2.0 -> v1.2,
// 1.2.3 -> v1.2.3.
//
// To cut a new version: npm version <x.y.z> --no-git-tag-version

const { version } = require('./package.json');

const versionName = 'v' + version.replace(/\.0$/, '');

module.exports = {
  appId: 'com.circuitcalculator.app',
  productName: 'Circuit Calculator',
  directories: {
    output: 'release',
  },
  win: {
    target: ['nsis'],
  },
  nsis: {
    artifactName: `Circuit-Calculator-${versionName}.\${ext}`,
  },
};
