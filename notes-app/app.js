const yargs = require('yargs')
const notes = require('./notes.js')
yargs.version('1.1.0')
yargs.command({
    command:'add',
    describe:'Add a new note!',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'String'
        }
    },
    handler:function(argv){
        //console.log('Adding a new note!',argv)
        //console.log('Title:'+argv.title)
        //console.log('Body:',+argv.body)
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
   command:'remove',
    describe:'Remove a note!',
    builder:{
        title:{
         describe:'Note Title',
         demandOption:true,type:'string'
        }
},
handler:function(argv){
    notes.removeNote(argv.title)
}
})

yargs.command({
    command:'list',
    describe:'List yoyr notes',
    handler(argv){
           notes.listNotes(argv.title)
    }
})
yargs.command({
    command:'read',
    describe:'Read a node',
    builder:{
        title:{
         describe:'Note Title',
         demandOption:true,
         type:'string'
        }
    },
    handler(argv){
    notes.readNote(argv.title)  
  }
})
//console.log(process.argv)
console.log(yargs.argv)
//const command = process.argv[2]
//console.log(process.argv)
//if (command === 'add')
//{console.log('Adding a note')
//}else if (command === 'remove') 
//{    console.log('Removing Note!')
//}
//console.log(process.argv[2])
//const Chalk = require('chalk')
//console.log(Chalk.red.inverse.bold('Success!'))
//const validator = require('validator')
//console.log(validator.isEmail('neha.bhumca07@gmail.com'))
//console.log(validator.isURL('https://mead.io'))
//const getNotes = require('./notes.js')
//const msg = getNotes()
//console.log(msg)

//fs.writeFileSync('notes.txt','this file was created by node.js.')
//fs.appendFileSync('notes.txt',' my first appended line')
//fs.appendFileSync('notes.txt','I live in kolkata')