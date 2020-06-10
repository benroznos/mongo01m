const mongo= require('mongojs')
const db = mongo('favoritesdb')


// find documents in database

// db.games.find((err,docs)=>{
//   if(err){console.log(err)}
//   console.log(docs)
// })


// insert documents into database

// db.games.insert({title:"test",type:"test1"},(err,info)=>{
//   if(err){console.log(err)}
//   console.log(info)
// })


// modify documents in database

// db.games.update({title:"test"},{$set:{type:"test2"}},(err,info)=>{
//   if(err){console.log(err)}
//   console.log(info)
// })


// remove documents from database

// db.games.remove({title:"test"},(err,info)=>{
//   if(err){console.log(err)}
//   console.log(info)
// })