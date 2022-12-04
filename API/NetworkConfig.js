const ip = require('ip');

const address= ip.address();
console.log(address);
module.exports={address};