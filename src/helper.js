import fs from 'fs/promises';
import path from 'path';

const notesFilePath = path.resolve('./notes.json');

export const readNotesFromFile = async () => {
    try {
        const data = await fs.readFile(notesFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading notes from file:', error);
        return [];
    }
};

export const writeNotesToFile = async (notes) => {
    try {
        await fs.writeFile(notesFilePath, JSON.stringify(notes, null, 2));
    } catch (error) {
        console.error('Error writing notes to file:', error);
    }
};
