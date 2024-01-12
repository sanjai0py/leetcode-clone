const User = (sequelize, DataTypes) => {
    return sequelize.define("User", {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        role:{
            type:DataTypes.STRING,
            allowNull:false,
            defaultValue:"user"
        },
        avatar:{
            type:DataTypes.STRING,
            allowNull:true
        }
    })
}

module.exports = User;