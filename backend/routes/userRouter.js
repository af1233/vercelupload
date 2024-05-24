const express=require("express");
const { register, login, getAllUsers } = require("../controllers/userController");
const {authMiddleware, roleAuthentication} = require("../middleware/authMiddleware");
const router=express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/allusers", getAllUsers);
router.get('/protected-route', authMiddleware,roleAuthentication, (req, res) => {
//    if (req.user.isAdmin) {
//     res.send(`Hello, ${req.user.name}`);
//    } else {
//     res.send(`Your are local user`);
//    }
  res.cookie("mycookie",req.token,{maxAge:30000});
   res.send(`Hello, ${req.user.name}`);
});


module.exports=router;