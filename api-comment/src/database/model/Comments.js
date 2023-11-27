import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Comments = sequelize.define("Comments", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    idBook: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

(async () => {
    await sequelize.sync();
})();

export default Comments