'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      let data=[{
        "name": "Indigo",
        "code": "#cf3",
        "imagepath": "http://dummyimage.com/30x30.jpg/5fa2dd/ffffff"
      }, {
        "name": "Indigo",
        "code": "#e95",
        "imagepath": "http://dummyimage.com/30x30.png/5fa2dd/ffffff"
      }, {
        "name": "Purple",
        "code": "#d4c",
        "imagepath": "http://dummyimage.com/30x30.png/ff4444/ffffff"
      }, {
        "name": "Indigo",
        "code": "#996",
        "imagepath": "http://dummyimage.com/30x30.png/cc0000/ffffff"
      }, {
        "name": "Maroon",
        "code": "#385",
        "imagepath": "http://dummyimage.com/30x30.png/5fa2dd/ffffff"
      }, {
        "name": "Maroon",
        "code": "#5bd",
        "imagepath": "http://dummyimage.com/30x30.png/dddddd/000000"
      }, {
        "name": "Puce",
        "code": "#162",
        "imagepath": "http://dummyimage.com/30x30.jpg/5fa2dd/ffffff"
      }, {
        "name": "Puce",
        "code": "#ab5",
        "imagepath": "http://dummyimage.com/30x30.bmp/5fa2dd/ffffff"
      }, {
        "name": "Purple",
        "code": "#e0d",
        "imagepath": "http://dummyimage.com/30x30.bmp/dddddd/000000"
      }, {
        "name": "Purple",
        "code": "#fdb",
        "imagepath": "http://dummyimage.com/30x30.jpg/ff4444/ffffff"
      }]
    data.map(item=>{
      item.createdAt=Sequelize.literal('NOW()');
      item.updatedAt=Sequelize.literal('NOW()');
      return item;
    })
      return queryInterface.bulkInsert('Colors', data, {});
  },
  
  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Colors', null, {});
  }
};
