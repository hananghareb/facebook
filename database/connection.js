import { Sequelize } from "sequelize";



export const sequelize = new Sequelize('mysql://uffjbuyasrpipqae:O2pvz5PIJyhj8USFfJRk@bxhqpyn4y2omgcmuf0ru-mysql.services.clever-cloud.com:3306/bxhqpyn4y2omgcmuf0ru',{
  dialect:'mysql'
})

  const dbconnection = sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.');
  }).catch ((error)=> {
    console.error('Unable to connect to the database:');
  })

  sequelize.sync({alert:true})


  export default dbconnection;