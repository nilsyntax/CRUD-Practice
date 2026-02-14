import { noteModel } from "../models/note.model";

export class Service{
   constructor(store){
      this.store = store
   }

   createNote(noteModel){
      const newNote = noteModel
      this.store.setState(state => {
         state.notes.push(newNote)
         state.activeNoteId = newNote.id
      })
   }

   updateNote(id, changes){
      this.store.setState(state => {
         const note = state.notes.find(n => n.id === id)
         if (!note) return
         Object.assign(note, changes)
         note.lastUpdate = Date.now()
      })
   }

   deleteNote(id){
      this.store.setState(state => {
         state.notes = state.notes.filter(n => n.id !== id)
      })
   }
}