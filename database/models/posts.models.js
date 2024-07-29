import { DataTypes } from "sequelize"
import { sequelize } from "../connection.js"
import usermodel from "./user.models.js"

 const postmodel = sequelize.define('post',{
    title:{
        type: DataTypes.STRING(100),
        allowNull:false
    },
    content:{
        type:DataTypes.STRING(100),
        allowNull:false
    },

    
})

usermodel.hasMany(postmodel,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'

})
postmodel.belongsTo(usermodel)

export default postmodel