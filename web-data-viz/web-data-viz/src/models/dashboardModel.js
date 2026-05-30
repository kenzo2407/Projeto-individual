var database = require("../database/config")

function dashboard(){
    
    var instrucaoSql = `
   SELECT
        pontos AS pontuação,
        DATE_FORMAT(dataR, '%d/%m %H:%i') AS momento_grafico,
        nome,
        conhecimento
    FROM quiz JOIN usuario
    ON idUsuario=fkUsuario
    WHERE dataR IS NOT NULL
    GROUP BY momento_grafico, pontos, conhecimento, nome
    ORDER BY momento_grafico DESC;
`;
    return database.executar(instrucaoSql);
}

function kpi(){
    var instrucaoSql = `
        SELECT
            MAX(pontos) AS maiorPontuacao,
            AVG(pontos) AS mediaPontuacao
        FROM quiz
        WHERE dataR IS NOT NULL;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    kpi,
    dashboard,
};