import { DataTypes } from "sequelize"
import { sequelize } from "../connection.js"
import postmodel from "./posts.models.js"
import usermodel from "./user.models.js"


const commentmodel =sequelize.define('comment',{
    content:{
        type: DataTypes.STRING(100)
    },
})

postmodel.hasMany(commentmodel,{
     onDelete:'CASCADE',
     onUpdate:'CASCADE'

})
commentmodel.belongsTo(postmodel)

usermodel.hasMany(commentmodel,{
     onDelete:'CASCADE',
     onUpdate:'CASCADE'
})
commentmodel.belongsTo(usermodel)

export default commentmodel