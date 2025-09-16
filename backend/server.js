const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const trashRoutes = require('./routes/trash.routes'); //import the subroutes from trash.routes

app.use(cors());
app.use(express.json());
app.use('/api', trashRoutes); //run under the /api route

app.listen(port, () => { //start the server
  console.log(`Server running at http://localhost:${port}`);
});
