module.exports=(sequelize, DataTypes)=>{

    const Orders=sequelize.define("Orders",{
      type:{
        type:DataTypes.STRING,
        allowNull:false
      },
      price:{
        type:DataTypes.STRING,
        allowNull:false
      },
      rider:{
       type: DataTypes.STRING,
       allowNull : true
      },
      from:{
        type: DataTypes.STRING,
        allowNull : false
      },
      to:{
       type: DataTypes.STRING,
       allowNull : false
      },
      customer:{
       type: DataTypes.STRING,
       allowNull : false
      },
      number:{
        type: DataTypes.STRING, 
         allowNull: false
      },
      riderNumber:{
        type: DataTypes.STRING,
        allowNull: true
      },
      details:{
        type: DataTypes.STRING,
        allowNull: true
    },
    status:{
        type: DataTypes.STRING,
        defaultValue: "pending"
    },
    stage:{
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
    })
     
   
    return Orders
   }
   