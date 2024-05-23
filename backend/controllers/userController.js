
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const User = require("../models/userModel");

const register=async(req, res)=>{
    const {name, email, password}=req.body;
    try {
         const ExistUser=await User.findOne({email});
         if (ExistUser) {
            res.status(200).json("User Already Exist");
         }
         const hashedPassword=await bcrypt.hash(password, 10);

         const newUser=new User({
            name,
            email,
            password:hashedPassword,
         })
         const savedUser=await newUser.save();
         res.status(201).json({message:"User Created Successfully",
            savedUser
         });
    } catch (error) {
        res.status(500).json("Internal server error")
    }
}

const login=async(req,res)=>{
    const {email,password}=req.body;
   try {
    const user=await User.findOne({email});
    if (!user) {
        return res.status(400).json("User not found")
        }
        const validPassword=await bcrypt.compare(password,user.password);
        if (!validPassword) {
            return res.status(400).json("Invalid Password");
            }
            const token=jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:"1d"});
            res.status(200).json({message:"Login Successful",token,user});

   } catch (error) {
    res.status(500).json("Internal server error");
   }
}

module.exports={register, login}