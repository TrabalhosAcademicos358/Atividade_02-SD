import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./src/database/db.sqlite",
});

export default sequelize;
