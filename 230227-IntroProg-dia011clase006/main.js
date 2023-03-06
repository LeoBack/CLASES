const fs = require("fs");

console.log(fs.readFileSync("./data.json", "utf8"));

// const data = fs.readFileSync("./data.json", "utf8");
// const dataParsed = JSON.parse(data);

// console.log(JSON.parse(data));

// const text = fs.readFileSync("./info.txt", "utf8");
// console.log(text);

// for (i = 0; i < dataParsed.length; i++) {
//   console.log(dataParsed[i]);
// }

/// SECCION DE ESCCRITUA

// const dataJs = [{ id: 1, desc: "Lapiz" }];
// const dataParsed = JSON.stringify(dataJs);

// fs.writeFileSync("./data2.json", dataParsed);