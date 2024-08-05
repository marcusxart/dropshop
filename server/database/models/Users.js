module.exports=(sequelize, DataTypes)=>{

    const Users=sequelize.define("Users",{
      name:{
        type:DataTypes.STRING,
        allowNull:false
      },
      email:{
       type: DataTypes.STRING,
       allowNull : false
      },
      password:{
       type: DataTypes.STRING,
       allowNull : false
      },
      isAdmin:{
        type: DataTypes.BOOLEAN,
         defaultValue: false
      },
      role:{
        type: DataTypes.STRING,
        defaultValue:"customer"
      }
    
    })
     
   
    return Users
   }
   