// Directorios
const dirCmd = "./crud";

// Comandos
const create = require(dirCmd + "/create.js");
const read = require(dirCmd + "/readJSON.js");
const update = require(dirCmd + "/update.js");
const delet = require(dirCmd + "/delete.js");
const help = require(dirCmd + "/help.js");

// Funciones
const cmdCreate = (pNewTitle, pNewDescripcion) => {
  if ((pNewTitle === undefined) | (pNewDescripcion === undefined)) {
    console.log(
      "> Command create error: Titulo y/o Descripcion no ingresado/s."
    );
  } else {
    console.log("> Command create: ", create(pNewTitle, pNewDescripcion));
  }
};

const cmdRead = () => {
  console.log("> Command read: ", read());
};

const cmdUpdate = (pTitle, pNewDescripcion) => {
    if ((pTitle === undefined) | (pNewDescripcion === undefined)) {
        console.log(
          "> Command update error: Titulo y/o Descripcion no ingresado/s."
        );
      } else {
        console.log("> Comamnd update: ", update(pTitle, pNewDescripcion));
      }
};

const cmdDelete = (pTitle) => {
  console.log(
    !pTitle
      ? "> Command delete error: Titulo no ingresado."
      : "> Comando delete: ",
    pTitle,
    " = ",
    delet(pTitle)
  );
};

const cmdHelp = () => {
  console.log(help());
};

const cmdDefault = () => {
  console.log(
    "No se encontro argumento valido.\nEjecute para mas informacion:\n- npm start list | node app.js list"
  );
};

// MAIN
const command = process.argv[2];
const param1 = process.argv[3];
const param2 = process.argv[4];

switch (command) {
  case "create":
    cmdCreate(param1, param2);
    break;
  case "read":
    cmdRead();
    break;
  case "update":
    cmdUpdate(param1, param2);
    break;
  case "delete":
    cmdDelete(param1);
    break;
  case "list":
    cmdHelp();
    break;
  default:
    cmdDefault();
    break;
}
