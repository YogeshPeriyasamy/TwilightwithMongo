const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const Cartitem=sequelize.define('cartitem',{
    id : {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true 
    },
    qty : {
        type: Sequelize.INTEGER,
        allowNull:false
    }
   
})
module.exports=Cartitem;  