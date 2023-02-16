function help() {
    return  "edit\tEdita la descripcion utilizando un titulo\n\t- npm start edit Title1 newDescripcion\n" +
            "filter\tFiltra Titulos por coincidencias\n\t- npm start filter co\n" +
            "find\tDevuelve true o false si encuentra el Titulo buscado\n\t- npm start find Title1\n" +
            "list\tDevuelve lista de Titulos\n\t- npm start list\n" +
            "return\tDevuelve las decripciones indicando un Titulo \n\t- npm start return Title1\n"
}

module.exports = help