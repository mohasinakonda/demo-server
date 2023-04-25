 const products=(req,res)=>{
    const details={
        name:'abul table',
        price:300
    }
    res.send(details)
}

module.exports={products}