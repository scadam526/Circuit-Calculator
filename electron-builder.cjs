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
  // Only package what the app needs at runtime. Vite already bundles every
  // npm dependency (React, KaTeX, nerdamer) into dist/, so node_modules,
  // src/ and config files would just be duplicate weight.
  files: ['dist/**/*', 'electron/**/*', '!node_modules/**/*'],
  // Ship only English Chromium locale files (UI strings for built-in
  // dialogs/menus); the other ~55 languages add ~50 MB unpacked.
  electronLanguages: ['en-US'],
  win: {
    target: ['nsis'],
  },
  nsis: {
    artifactName: `Circuit-Calculator-${versionName}.\${ext}`,
  },
};
