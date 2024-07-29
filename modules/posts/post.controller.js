import usermodel from "../../database/models/user.models.js"
import postmodel from '../../database/models/posts.models.js'

export const addpost =async(req,res)=>{

    const {title,content,userId} =req.body
    const userexist = await usermodel.findOne({where: {id:userId , loginstatus:true} }
    )
    if(!userexist){
       return res.json("user not exist")
    }
    const createpost = await postmodel.create({title,content,userId})
    res.json("created post")


}


export const getpost = async(req,res)=>{
    const post =await postmodel.findAll()
    res.json({post})
}


export const deletepost = async(req,res)=>{
    const {id} =req.query
    const{userId} = req.body
    const deletepost = await postmodel.destroy({where:{id,userId}})
    if(deletepost>0){
        res.json("deleted successfully")
    
    }
    res.json("invaild")
}

export const updatepost = async(req,res)=>{
    const {id} =req.query
    const{title,content,userId} = req.body
    const updatepost = await postmodel.update({title,content},{where:{id,userId}})
    if(updatepost>0){
        res.json("updated successfully")
    
    }
    res.json("post not found")
}


export const getspecefic = async(req,res)=>{
    const posts = await postmodel.findAll({
        include:{
            model:usermodel
        }

    })
    res.json(posts)
}