module.exports=(sequelize, DataTypes)=>{

    const Riders=sequelize.define("Riders",{
      firstName:{
        type:DataTypes.STRING,
        allowNull:false
      },
      lastName:{
        type:DataTypes.STRING,
        allowNull:false
      },
      email:{
       type: DataTypes.STRING,
       allowNull : false
      },
      guarantor:{
        type: DataTypes.STRING, 
        allowNull : false
      },
      guarantorNumber:{
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
        defaultValue:"rider"
      }
    })
     
   
    return Riders
   }
   