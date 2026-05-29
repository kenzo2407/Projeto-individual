var database = require("../database/config")

function dashboard(){
    
    var instrucaoSql = `
    SELECT
        pontos AS pontuação,
        DATE_FORMAT(dataR, '%d/%m %H:%i') AS momento_grafico,
        COUNT(*) AS quantidade
    FROM quiz
    WHERE dataR IS NOT NULL
    GROUP BY momento_grafico, pontos
    ORDER BY momento_grafico DESC;
`;
   
    return database.executar(instrucaoSql);
}

module.exports = {
    
    dashboard,
};