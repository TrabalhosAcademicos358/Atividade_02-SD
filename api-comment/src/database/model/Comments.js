import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Comments = sequelize.define("Comments", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    idBook: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Comments;
