const createOne=async(model,data)=>{
    return await model.create({...data})
}

const deleteOne=async(model,filter)=>{
    return await model.deleteOne({...filter})
}

const updateOne=async(model,filter,data)=>{
    return await model.findOneAndUpdate({...filter},{...data})
}
const retrieveOne=async(model,filter)=>{
    return await model.findOne({...filter})
}
const retrieveMany=async(model,filter,data)=>{
};


const commonHelper={
    createOne,
    deleteOne,
    updateOne,
    retrieveOne,
    retrieveMany 
};
module.exports=commonHelper