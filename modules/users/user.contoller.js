
import usermodel from "../../database/models/user.models.js"
import bcrypt from 'bcrypt'


export const adduser = async(req,res)=>{
    const {username,email,password}= req.body
    const userexist = await usermodel.findOne({ where: {email:email} })
    if(userexist){
        res.json('user exist')
    }
    const hashpassword =bcrypt.hashSync(password,8)


  const user = await usermodel.create({username,email,password:hashpassword})
    res.json({message : "sucess"})
}


export const login = async(req,res)=>{
    const {email ,password} = req.body
    const user = await usermodel.findOne({ where: {email:email} })
    if(!user){
      return res.json('user not exist')
    }
    const checkpassword = bcrypt.compareSync(password, user.password)
    if(!checkpassword){
      return  res.json("password incorrect")
    }
    const loginstatus = await user.update({loginstatus : true})
    res.json("login sucess")

}

 export const logout = async(req,res)=>{
    const {id} = req.query
    const loginstatus = await usermodel.update({loginstatus : false},{where:{id:id}})
    res.json("logout successufly")


}