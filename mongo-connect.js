const MongoClient = require('mongodb').MongoClient

// Connection URI
const MONGODB_URI = "mongodb://localhost:27017/water-taxi";

// Use connect method to connect to the server
MongoClient.connect(MONGODB_URI, (err, database) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  console.log(`Connected to mongodb: ${MONGODB_URI}`);
  database.close()
})

// *  *  *

// With Promise
const mongoDefault = () => new Promise((resolve, reject) => {
  MongoClient.connect(MONGODB_URI, (err, database) => {
    if (err) {
      reject(err)
    } else {
      resolve(database.db('water-taxi'))
    }
  })
})