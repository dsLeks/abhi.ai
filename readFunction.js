import { read, readFile } from "fs";

export const readFunction = () => {
  let fileData = "";
  readFile("test.js", "utf8", (err, data) => {
    if (!err) {
      console.log(data);
      fileData.concat(data);
      return fileData;
    } else console.log("there has been an error");
  });
};

readFunction();
