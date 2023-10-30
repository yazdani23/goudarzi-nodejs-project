const index=(req, res)=>{

    return res.send("<h1>I am in Root route </h1>");
}
const route404=(req, res)=>{

    return res.send("<h1> not found . 404 route </h1>");
}

module.exports= {index, route404}