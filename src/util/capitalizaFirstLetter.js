/*
Deixa a primeira letra de uma palavra em maiusculo
EX: exemplo -> Exemplo
*/
const capitalizaFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1)
}

export default capitalizaFirstLetter; 