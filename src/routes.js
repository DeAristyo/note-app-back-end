import {
    addNoteHandler,
    getNoteWithIdHandler,
    getAllNotesHandler,
    deleteNoteHandler,
    updateNoteHandler
} from './handler.js';
// import notes from './notes.js';

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello this is note taking API';
        }
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteWithIdHandler,
    },
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: updateNoteHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteHandler,
    },
];

export default routes;