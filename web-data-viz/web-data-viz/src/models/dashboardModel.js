var database = require("../database/config")

function dashboard(){
    
    var instrucaoSql = `
          SELECT
            quiz.pontos
        FROM quiz
        ORDER BY pontos DESC;

    `;
   
    return database.executar(instrucaoSql);
}

module.exports = {
    
    dashboard,
};