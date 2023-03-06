function help() {
    return  "create\tAgrega nuevo elemento 'titulo' 'descripcion' \n\t- npm start create 'titleA' 'DescriptionA'\n" +
            "read\tLista contenido del archivo\n\t- npm start read\n" +
            "update\tActualiza la 'descripcion' de un titulo\n\t- npm start update 'titleA' 'descriptionA0'\n" +
            "delete\tElimina un elemento por titulo\n\t- npm start delete 'titleA'\n" +
            "list\tEsta herramientad e ayuda de comandos\n\t- npm start list\n"
}

module.exports = help