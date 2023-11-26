import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./src/database/db.sqlite",
});

sequelize.authenticate()
 .then(() => console.log('Conexão ao banco de dados estabelecida com sucesso.'))
 .catch(err => console.error('Não foi possível conectar ao banco de dados:', err));

export default sequelize;
