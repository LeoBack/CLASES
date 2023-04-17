const fs = require("fs");

// console.log(fs.readFileSync("./data.json", "utf8"));
// console.log(fs.readFileSync("./tasksData.json", "utf8"));

const data = fs.readFileSync("./tasksData.json", "utf8");
// console.log(JSON.parse(data));
const dataParsed = JSON.parse(data);
console.log(dataParsed);

// const text = fs.readFileSync("./info.txt", "utf8");
// console.log(text);

// for (i = 0; i < dataParsed.length; i++) {
//   console.log(dataParsed[i]);
// }

/// SECCION DE ESCCRITUA

// const dataJs = [{ id: 1, desc: "Lapiz" }];
// const dataParsed = JSON.stringify(dataJs);

// fs.writeFileSync("./data2.json", dataParsed);
