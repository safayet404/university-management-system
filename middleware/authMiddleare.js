const isAdmin = (req,res,next) =>{
    if(req.session.adminId) 
    {
        return next()
    }
    else
    {
        return res.status(401).json({ message: 'Unauthorized. You are not admin.' });
    }
} 

module.exports = { isAdmin };