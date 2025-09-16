const express = require('express');
const router = express.Router();
const { fetchTrashDay } = require('../services/trash.service'); //import fetchTrashDay from the service file

router.get('/fetchTrashDay', async (req, res) => {
  try {
    const address = req.query.address; //set address to input form front end call
    console.log("FROM trash.routes: " + decodeURIComponent(address));
    const data = await fetchTrashDay(address); //call function from service file
    res.json(data); //set response to the data returned from service file
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch trash day info' }); //return error on error
  }
});

module.exports = router;
