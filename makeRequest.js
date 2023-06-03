import { readFunction } from "./readFunction.js";

const makeRequest = () => {
  const fileData = readFunction();
  console.log(fileData);
};

makeRequest();
