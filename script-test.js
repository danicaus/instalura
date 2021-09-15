// eslint-disable-next-line import/no-extraneous-dependencies
const shell = require('shelljs');

console.log('olá, mundo!');

shell.exec('git diff --name-only branch-scripts-testes..main');
