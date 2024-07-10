import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  const contactsFile = await fs.readFile(PATH_DB, 'utf8');
  const contacts = JSON.parse(contactsFile);
  try {
    if (contacts.length > 0) {
      const withoutRemovedContact = contacts.slice(0, -1);
      await fs.writeFile(
        PATH_DB,
        JSON.stringify(withoutRemovedContact, null, 2),
      );
      console.log(`The contact was successfully deleted.`);
    } else {
      console.log(`Contact's array is empty`);
    }
  } catch (err) {
    console.error('Contact deleting was failed:', err);
  }
};

removeLastContact();
