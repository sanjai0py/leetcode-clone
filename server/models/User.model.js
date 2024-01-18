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
            allowNull:true,
            defaultValue:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAnonymous_%2528hacker_group%2529&psig=AOvVaw1YpQ02ntR1fyyY7SP37iiY&ust=1705647586778000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLC50ceu5oMDFQAAAAAdAAAAABAD"
        }
    })
}

module.exports = User;