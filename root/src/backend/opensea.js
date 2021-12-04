const axios = require('axios');

var ethAddress = '';
var finalFloorPrice = 0;

// First API Call To Get Collection Names
function getCollectionNames(api_url){
  return axios.get(api_url);
};

function generateOpenSeaAPICall(address){
  return 'https://api.opensea.io/api/v1/assets?owner='+address+'&order_direction=desc&offset=0&limit=20';
}

function getFloorPrice(slugName) {
  return axios.get('https://api.opensea.io/collection/'+ slugName + '/stats');
}

function findFloorPriceOfCollections(collectionNames){
  for(var slug of collectionNames){
    getFloorPrice(slug).then((data) => {
      // Incoming data will hold floor price. Add to a global variable
      updateFloorPrice(data.data.stats.floor_price);
    });
  }
}

const updateFloorPrice = (floor) => {
  finalFloorPrice += floor;

  // Limit the leading decimals to 4 --> 4.2249
  document.getElementById("worth").innerHTML = finalFloorPrice.toFixed(3) + " ETH";
}

// This constant is called from the DOM when a user enters a valid ETH address in the input field
const totalFloorPrice = (text) => {
  var validEthAddress = text.target.value.match(/^0x[a-fA-F0-9]{40}$/g)
  if(validEthAddress){
    document.getElementById("addressInput").style.color = "#4CAF50";
    ethAddress = text.target.value;
    var api_url = generateOpenSeaAPICall(ethAddress);
    getCollectionNames(api_url).then((data) => {
      var collectionNames = [];
      for(var colletion of data.data.assets){
        collectionNames.push(colletion.collection.slug)
      }
    
      findFloorPriceOfCollections(collectionNames);
    });
  }
  else{
    document.getElementById("worth").innerHTML = 0.0 + " ETH";
    document.getElementById("addressInput").style.color = "red";
  }
}

export default totalFloorPrice;