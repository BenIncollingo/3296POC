const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("--------------------------------------------------------------");
console.log("Welcome to WasteWatch");

rl.question("Please enter your address\n> ", (userAddress) => {
  callCoPAPI(userAddress);
  rl.close();
});

async function callCoPAPI(userAddress) {
  try {
    const response = await axios.get(
      `https://api.phila.gov/ais/v1/addresses/${encodeURIComponent(userAddress)}`
    );
    
    const data = response.data;
    const trashDay = data.features?.[0]?.properties?.rubbish_recycle_day;
    
    console.log(`User lives at ${userAddress}`);
    console.log(`Trash day: ${trashDay || "Not found"}`);
    console.log("--------------------------------------------------------------");
    
  } catch (err) {
    console.error("API error:", err.message);
  }
}
