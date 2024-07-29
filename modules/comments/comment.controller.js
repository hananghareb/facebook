import commentmodel from '../../database/models/comment.models.js'
import usermodel from '../../database/models/user.models.js'
import postmodel from '../../database/models/posts.models.js'

export const addcomment = async(req,res)=>{
    const {content,userId,postId} = req.body
    const checkuser =await usermodel.findOne({where: {id:userId,loginstatus:true}})
    if(!checkuser){
        res.json("user not exist")
    }

    const addcomment =await commentmodel.create({content,userId,postId})
    res.json("added comment successfully")
}

export const getcomment = async(req,res)=>{
    const getcomments = await commentmodel.findAll()
    res.json(getcomments)
}

export const getspeceficcomment = async(req,res)=>{
    const comments = await usermodel.findAll({
        include:{
            model:commentmodel
        }

    })
    res.json(comments)
}
export const updatecomment = async(req,res)=>{
    const {id} =req.query
    const{userId,content} = req.body
    const updatecomeent = await commentmodel.update({content},{where:{id,userId}})
    if(updatecomment>0){
        res.json("not found")
    
    }
    res.json("updated succefully")
}

export const deletecomment = async(req,res)=>{
    const {id} =req.query
    const{userId} = req.body
    const deletecomment = await commentmodel.destroy({where:{id,userId}})
    if(deletecomment>0){
        res.json("deleted successfully")
    
    }
    res.json("invaild")
}