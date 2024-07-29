import { DataTypes } from "sequelize"
import { sequelize } from "../connection.js"



const usermodel = sequelize.define('user',{
    username:{
        type: DataTypes.STRING(100),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(100),
        unique:true,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    loginstatus:{
        type:DataTypes.BOOLEAN,
    }
})


export default usermodel