const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'You are not authorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        req.token=token;
        req.user = user;  // Attach user to the request object
        next();
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

const roleAuthentication=async(req,res,next)=>{
     const user = req.user;
     if(user.isAdmin===false){
        next();
     }else{
        return res.status(401).json({ message: 'You are not authorized as admin' });
     }
}





module.exports = {authMiddleware,roleAuthentication};

