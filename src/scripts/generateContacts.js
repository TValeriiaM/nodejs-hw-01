import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

const generateContacts = async (number) => {
  try {
    const contactsFile = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(contactsFile);
    for (let i = 0; i < number; i += 1) {
      contacts.push(createFakeContact());
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`${number} new contacts was added successfully.`);
  } catch (err) {
    console.error(`Error of adding contacts:`, err);
  }
};

generateContacts(5);
