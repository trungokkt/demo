let controller={};
const models=require('../models');
let category=models.Category;

controller.getAll = ()=>{
    return new Promise((resolve,reject)=>{
        category
                .findAll({
                    attributes:['id','name','imagepath','summary']
                })  
                .then(data => resolve(data))
                .catch(error => reject(new Error(error)));     
    });
};

module.exports = controller;