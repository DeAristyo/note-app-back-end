// import notes from './notes.js'; //Commented beacuse we use JSON to store data instead of notes variable
import { nanoid } from 'nanoid';
import { writeNotesToFile, readNotesFromFile } from './helper.js';

export const getAllNotesHandler = async (request, h) => {
  try {
    const notes = await readNotesFromFile();

    return {
      status: 'success',
      data: {
        notes,
      },
    };
  } catch (error) {
    console.error("Error getting notes:", error);
    const response = h.response({
      status: 'error',
      message: 'Internal Server Error',
    });
    response.code(500);
    return response;
  }
};

export const getNoteWithIdHandler = async (request, h) => {
  try {
    const { id } = request.params;
    //Variable to store and call data from Notes.json
    //Delete this variable and uncomment notes.js import to use notes variable instead of Json file
    const notes = await readNotesFromFile();

    const note = notes.find((note) => note.id === id);

    if (note) {
      return {
        status: 'success',
        data: {
          note,
        },
      };
    } else {
      const response = h.response({
        status: 'fail',
        message: 'Note not found',
      });
      response.code(404);
      return response;
    }
  } catch (error) {
    console.error("Error getting note:", error);
    const response = h.response({
      status: 'error',
      message: 'Internal Server Error',
    });
    response.code(500);
    return response;
  }
};


export const addNoteHandler = async (request, h) => {
  const { title, tags, body } = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  try {
    const newNote = {
      title, tags, body, id, createdAt, updatedAt,
    };

    // notes.push(newNote); //Way to store data to variable instead of JSON

    //Way to store data to notes.json
    const jsonNotes = await readNotesFromFile();
    jsonNotes.push(newNote);
    await writeNotesToFile(jsonNotes);

    //Check if data was succesfully stored
    //Using variable
    // const isSuccess = notes.filter((note) => note.id === id).length > 0;

    //Using json
    const isSuccess = jsonNotes.filter((note) => note.id === id).length > 0;


    if (isSuccess) {
      const response = h.response({
        status: 'success',
        message: 'Catatan berhasil ditambahkan',
        data: {
          noteId: id,
        },
      });
      response.code(201);
      return response;
    } else {
      throw new Error('Failed to add note');
    }
  } catch (error) {
    console.error("Error adding note:", error);
    const response = h.response({
      status: 'fail',
      message: 'Catatan gagal ditambahkan',
    });
    response.code(500);
    return response;
  }
};

export const updateNoteHandler = async (request, h) => {
  try {
    const { id } = request.params;
    const { title, tags, body } = request.payload;

    const notes = await readNotesFromFile();

    const index = notes.findIndex((note) => note.id === id);

    if (index !== -1) {
      notes[index] = {
        ...notes[index],
        title,
        tags,
        body,
        updatedAt: new Date().toISOString(),
      };

      await writeNotesToFile(notes);

      return {
        status: 'success',
        message: 'Catatan berhasil diperbarui',
      };
    } else {
      const response = h.response({
        status: 'fail',
        message: 'Catatan tidak ditemukan',
      });
      response.code(404);
      return response;
    }
  } catch (error) {
    console.error("Error updating note:", error);
    const response = h.response({
      status: 'error',
      message: 'Terjadi kesalahan pada server',
    });
    response.code(500);
    return response;
  }
};

export const deleteNoteHandler = async (request, h) => {
  try {
    const { id } = request.params;
    const notes = await readNotesFromFile();

    const index = notes.findIndex((note) => note.id === id);

    if (index !== -1) {
      notes.splice(index, 1);
      await writeNotesToFile(notes);

      return {
        status: 'success',
        message: 'Catatan berhasil dihapus',
      };
    } else {
      const response = h.response({
        status: 'fail',
        message: 'Catatan tidak ditemukan',
      });
      response.code(404);
      return response;
    }
  } catch (error) {
    console.error("Error deleting note:", error);
    const response = h.response({
      status: 'error',
      message: 'Terjadi kesalahan pada server',
    });
    response.code(500);
    return response;
  }
};