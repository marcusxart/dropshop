module.exports=(sequelize, DataTypes)=>{

    const Forgetpassword=sequelize.define("Forgetpassword",{
      
      token:{
        type: DataTypes.STRING,
        allowNull:false
      },
      expiry:{
        type: DataTypes.DATE,
        allowNull:false
      },
      userid:{
       type: DataTypes.INTEGER,
       allowNull: false 
      }
    })
     
   
    return Forgetpassword
   }
   