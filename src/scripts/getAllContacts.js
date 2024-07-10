import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const contactsFile = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(contactsFile);
    return contacts;
  } catch (err) {
    console.error('File reading error:', err);
  }
};

console.log(await getAllContacts());
