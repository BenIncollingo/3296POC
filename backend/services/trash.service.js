const axios = require('axios');

exports.fetchTrashDay = async (address) => {
   try {
      var response = await axios.get(
        `https://api.phila.gov/ais/v1/addresses/${encodeURIComponent(address)}`
      );
      
      var data = response.data;
      var trashDay = data.features?.[0]?.properties?.rubbish_recycle_day;

      switch (trashDay){
        case "MON": 
          trashDay = "Monday";
          break;
        case "TUE": 
          trashDay = "Tuesday";
          break;
        case "WED": 
          trashDay = "Wednesday";
          break;
        case "THU": 
          trashDay = "Thursday";
          break;
        case "FRI": 
          trashDay = "Friday";
          break;
        case "SAT": 
          trashDay = "Saturday";
          break;
        case "SUN": 
          trashDay = "Sunday";
          break;
      }
      
      
    } catch (err) {
      console.error("API error:", err.message);
    }
  console.log("got here with: " + trashDay);
  return {
    "address": decodeURIComponent(address),
    "trashDay": trashDay
  };
};
