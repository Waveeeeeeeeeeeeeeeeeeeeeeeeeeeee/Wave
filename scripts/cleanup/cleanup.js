import fs from 'node:fs';
const path = './scripts/rename/';

fs.rm(path, { recursive: true }, (err) => {
  if (err) throw err;
  console.log('Directory deleted!');
});
