const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env:{
    url:'https://www.amazon.in',
    USERNAME:'9381469574',
    PASSWORD:'Chandu@2601',
    cardName:'Garlapati Uma Sowmya',
    cardNumber:'4280940012690731',
    url:"https://www.amazon.com",
    fullName:"Garlapati Uma Sowmya",
    pincode:"507001",
    city:"Khammam",
    street:"Shukravaripet",
    houseNo:"8-8-185",
    state:"Telangana",
    phoneNo:'9381469574'

  }
});
