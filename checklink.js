const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());

app.post('/check_link', async (req, res) => {
  const link   = req.body.link;
  

  try {
    // Send a GET request to the provided link
    // const response = await axios.get(link);
    // res.status(200).json(response);


    axios
    .get(link)
    .then(function (response) {
    // Check the response status code to determine if the link is valid
    if (response.status >= 200 && response.status < 400) {
       return res.status(200).json(link);
      } else {
        res.status(200).json({ isValid: false, errorMessage: 'Broken link' });
      }


    });




  } catch (error) {
    res.status(200).json({ isValid: false, errorMessage: 'Failed to fetch the link' });
  }
});

app.listen(3000,'127.0.0.1', () => {
  console.log('Server is running on port 3000');
});  