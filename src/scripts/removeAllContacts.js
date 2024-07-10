import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  const contactsFile = await fs.readFile(PATH_DB, 'utf8');
  const contacts = JSON.parse(contactsFile);
  try {
    if (contacts.length > 0) {
      contacts.length = 0;
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
      console.log(`All contacts was successfully deleted.`);
    } else {
      console.log(`Contact's array is empty`);
    }
  } catch (err) {
    console.error('Contacts deleting was failed:', err);
  }
};

removeAllContacts();
