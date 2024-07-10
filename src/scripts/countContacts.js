import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const contactsFile = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(contactsFile).length;
  } catch (error) {
    console.log('File reading error:', error);
  }
};
console.log(await countContacts());
