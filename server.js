const app = require('./app.js');
const db = require('./db/index.js');

const PORT = process.env.PORT || 3001;

db.connect()
  .then(() => {
    console.log('database connected')
  });



// serverConfiguration(4000)
app.listen(PORT)
