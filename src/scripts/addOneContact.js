import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const contactsFile = await fs.readFile(PATH_DB, 'utf8');
  const contacts = JSON.parse(contactsFile);
  const newContact = createFakeContact();
  try {
    contacts.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`New contact was added successfully.`);
  } catch (err) {
    console.error(`Error of adding contact:`, err);
  }
};

addOneContact();
