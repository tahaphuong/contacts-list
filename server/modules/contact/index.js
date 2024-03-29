const model = require("./model")
const fs = require('fs')
const { json } = require('body-parser')

function successTemplate(data) {
  return {
    success: true,
    data: data
  }
}

function failTemplate(message) {
  return {
    success: false,
    message: message
  }
}

// function writeFile(data) {
//   fs.writeFileSync(databaseFilePath, JSON.stringify(data), 'utf-8')
// }

async function getListContacts(req, res, next) {
  try {
    let data = await model.find({})
    await res.json(
      successTemplate(data)
    )
  } catch(err) {
    next(err)
  }
}

async function createNewContact(req, res, next) {
  try {
    // let list = readFile()
    let rawData = req.body

    // if(!newContact || !newContact.id) {
    //   throw new Error(`Require 'id'!`)
    // }
    
    // if(!newContact || !newContact.name) {
    //   throw new Error(`Require 'name'!`)
    // }

    // if(!newContact || !newContact.phone) {
    //   throw new Error(`Require person 'number'!`)
    // }
    // list.splice(0, 0, newContact)
    // writeFile(list)
    let data = await model.create(rawData)
    await res.json(
      successTemplate(data)
    )
  } catch(err) {next(err)}
}

function deleteContactHandler(req, res, next) {
  throw new Error('This feature is not yet supported')
  // try {
  //   let list = readFile()
  //   let id = req.params.id
    
  //   if(!id) {
  //     throw new Error(`Require person 'id'!`)
  //   }
  //   let personIndex = list.findIndex(person => person.id == id)
  //   if(!personIndex < 0) {
  //     throw new Error(`Not found person with name: '${id}'`)
  //   }
  //   list.splice(personIndex, 1)
  //   writeFile(list)

  //   res.json(list)
  // } catch(err) {
  //   next(err)
  // }
}

function findContactByName(req, res, next) {
  throw new Error('This feature is not yet supported')
  // try {
  //   let name = req.params.name

  //   if(!name) {
  //     throw new Error('Params name required!')
  //   }
  //   let person = list.find(item => item.name == name)
  //   if(!person) {
  //     throw new Error(`Not found person with name: '${name}'`)
  //   }

  //   res.json(person)
  // } catch(err) {
  //   next(err)
  // }
}

function findContactByNumber(req, res, next) {
  throw new Error('This feature is not yet supported')
  // try {
  //   let number = req.params.phone

  //   if(!number) {
  //     throw new Error('Params number required!')
  //   }
  //   let person = list.find(item => item.phone == number)
  //   if(!person) {
  //     throw new Error(`Not found person with name: '${number}'`)
  //   }

  //   res.json(person)
  // } catch(err) {
  //   next(err)
  // }
}

function updateContactHandler(req, res, next) {
  throw new Error('This feature is not yet supported')
  // try {
  //   let data = req.body
  //   let newContact = req.body.name
  //   let newNumber = req.body.phone
  //   let email = req.body.email
  //   let location = req.body.location

  //   if(!data || !data.phone) {
  //     throw new Error(`Require person 'number'!`)
  //   }
  //   if(!newContact) {
  //     throw new Error(`Require 'name'!`)
  //   }

  //   let person = list.find(person => person.name == name)
  //   if(!person) {
  //     throw new Error(`Not found person with name '${data.id}'`)
  //   }
  //   person.name = newContact
  //   person.phone = newNumber
  //   person.location = location
  //   person.email = email

  //   res.json(person)
  // } catch(err) {
  //   next(err)
  // }
}

module.exports = {
  getListContacts,
  findContactByName,
  findContactByNumber,
  createNewContact,
  updateContactHandler,
  deleteContactHandler
}

// const list = [
//   {
//     id: '23456789',
//     name: 'Nguyen Van A',
//     phone: '1591181282737',
//     location: '23 abc street',
//     email: '123@321'
//   },
//   {
//     id: '235467',
//     name: 'Tran B',
//     phone: '154576897',
//     location: '45 abc street',
//     email: '123@341'
//   },
//   {
//     id: '28906789',
//     name: 'Pham C',
//     phone: '657879',
//     location: '23 abc street',
//     email: '123@321'
//   }
// ]
