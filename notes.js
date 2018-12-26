function addNote(title, body) {
  console.log('Adding note: ',title, body);
}

function listNotes() {
  console.log('Listing notes');
}

function removeNote(title) {
  console.log('removing :', title);
}

function readNote(title) {
  console.log('reading: ', title);
}

module.exports = {
  addNote,
  listNotes,
  removeNote,
  readNote
};
