console.log('running app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js'); //relative path to de file

const yargsArg = yargs.argv;
const command = yargs.argv._[0];
// const command = process.argv[2];
// console.log('Process: ', process.argv);

console.log(yargsArg._[0]);

if (command === 'add') {
  notes.addNote(yargsArg.title, yargsArg.body);
} else if (command === 'list') {
  notes.listNotes();
} else if (command === 'read') {
  notes.readNote(yargsArg.title);
} else if (command === 'remove') {
  notes.removeNote(yargsArg.title);
} else {
  console.log('command do not recognize');
}
