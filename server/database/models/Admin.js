module.exports=(sequelize, DataTypes)=>{

    const Admin=sequelize.define("Admin",{
      
      name:{
        type: DataTypes.STRING,
        allowNull:false
      },
      password:{
        type: DataTypes.STRING,
        allowNull:false
      },
      isAdmin:{
       type: DataTypes.BOOLEAN,
       allowNull: false,
       defaultValue: true 
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "admin"
      },
      email:{
        type: DataTypes.STRING,
        allowNull:false
      },
    })
     
   
    return Admin
   }
   