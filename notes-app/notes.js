const fs = require('fs')
const chalk = require('chalk')
const getNotes = function(){
    return ' your Notes.....'
}
const addNote = (title,body)  => {
 const notes = loadNotes()
 const duplicateNote =  notes.find((note) => note.title === title )

 debugger

  if (!duplicateNote){
      notes.push({
          title: title,
          body: body
        })
        saveNotes(notes) 
      console.log(chalk.green.inverse('New Note added'))
    } else {
        console.log(chalk.inverse.red('note title taken!'))
   }
}

const removeNote = function(title) {
    const notes = loadNotes()
    const notesTokeep = notes.filter(function(note){
        return note.title!= title
    })
  if (notes.length > notesTokeep.length){
       console.log(Chalk.green.inverse('Note Removed!'))
       saveNotes(notesTokeep)
     } else{
      console.log(Chalk.red.inverse.bold('No note found!'))
   }
}

const listNotes = () =>
{
    const notes = loadNotes()
    console.log(Chalk.inverse.red('Your Notes!'))
    notes.forEach((note) =>
    {
        console.log(note.title)
    })
}
const readNote = (title) =>
{
 const notes = loadNotes()
 const note = notes.find((note) => note.title === title)
  if(note){
      console.log(chalk.inverse(note.title))
      console.log(note.body)
          } else {
      console.log(chalk.red.inverse('Note not found!'))
         }
 }

const saveNotes = function(notes){
   const dataJSON = JSON.stringify(notes)
   fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function(){
 try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
 catch(e){
    return[]
 }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    loadNotes: loadNotes,
    listNotes: listNotes,
    readNote : readNote
}
