'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      let data=[{
        "name": "pioglitazone hydrochloride",
        "imagepath": "http://dummyimage.com/30x30.bmp/cc0000/ffffff"
      }, {
        "name": "2in1",
        "imagepath": "http://dummyimage.com/30x30.jpg/ff4444/ffffff"
      }, {
        "name": "Zidovudine",
        "imagepath": "http://dummyimage.com/30x30.png/ff4444/ffffff"
      }, {
        "name": "Mixture of Standardized and Non-Standardized Southeastern Grasses",
        "imagepath": "http://dummyimage.com/30x30.bmp/cc0000/ffffff"
      }, {
        "name": "Bacitracin",
        "imagepath": "http://dummyimage.com/30x30.png/dddddd/000000"
      }, {
        "name": "SUNMARK TUSSIN CF",
        "imagepath": "http://dummyimage.com/30x30.png/ff4444/ffffff"
      }, {
        "name": "Rx Act Heartburn Prevention",
        "imagepath": "http://dummyimage.com/30x30.jpg/dddddd/000000"
      }, {
        "name": "All Day Allergy",
        "imagepath": "http://dummyimage.com/30x30.png/cc0000/ffffff"
      }]
    data.map(item=>{
      item.createdAt=Sequelize.literal('NOW()');
      item.updatedAt=Sequelize.literal('NOW()');
      return item;
    })
      return queryInterface.bulkInsert('Brands', data, {});
  },
  
  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Brands', null, {});
  }
};
