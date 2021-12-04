const axios = require('axios')
require('dotenv').config()

// This module will be used for getting any user information from MetaMask
axios.get(process.env.GET_ERC_721_TOKENS + process.env.API_KEY)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log("Error");
  });
