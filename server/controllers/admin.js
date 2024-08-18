const {Admin} = require("../database")
const bcrypt = require("bcryptjs")
const {generateToken} = require("../utils/jwt")

const signupAdmin = async(req,res,next)=>{

    const {name, email, password}= req.body
    
    if (!name || !email || !password)  {
        const err = new Error("fill in required fields")
        err.status = 400
        next(err)
    }
      
    const userExist = await Admin.findOne({
        where: {
          email: email,
        }
      });
    
      if (userExist) {
        const err = new Error("Email already in use")
        err.status= 400
        next(err)
        return
      }
      //hashing password
      try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const saved = await Admin.create({ email: email, password: hashPassword, name});
        res.status(201).json(saved);
      } catch (error) {
        const err = new Error(error.message)
        next(err)
      }
    };


    const loginAdmin = async (req, res,next) => {
        const { password, email } = req.body
      
        if (!email || !password) {
          const err = new Error("please fill in all fields")
          err.status = 400
          return next(err)
          
        }
        const existingUser = await Admin.findOne({
          where: {
            email: email,
          },
        });
      
        if (!existingUser) {
          const err = new Error("incorrect email or password")
          err.status = 400
          return next(err)
        }
        //COMPARE PASSWORD
        try {
           const correct = await bcrypt.compare(
            req.body.password,
            existingUser.password,
          );
          const { email, id, isAdmin, role,name,...others } = existingUser;
      
          const userInfo = {
            isAdmin: existingUser.isAdmin,
            email: existingUser.email,
            role: existingUser.role,
            name: existingUser.name
          };
          correct ? res.status(200).json({ email, id, isAdmin, name,token: generateToken(userInfo) })
            : res.status(400).json("incorrect password");
      
        } catch (error) {
          const err = new Error(error.message)
          return next(err)
        }
      };
      
       
module.exports= {signupAdmin,loginAdmin}      