module.exports = (req, res, next)=>{
    if(!req.user){
        console.log("not logged in");
        return res.status(401).send({err: "not logged in"});
    }
    next();
}