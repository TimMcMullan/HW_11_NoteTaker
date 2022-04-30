// Todo: Require the util and fs needed
// Util is a built in feature of node like fs
const fs = require("fs");
const util = require("util");
// const {v1: uuidv1} = require(‘uuid’);
// writeToFile
const readFromFile = util.promisify(fs.readFile);
/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
// readToFile
const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`/nData written to ${destination}`)
    )
/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
 // Todo: Require the uuid/vl package in your package json
 const readAndAppend = (content, file) => {
     fs.readFile(file, "utf-8", (err, data) => {
         if (err) {
             console.log(err);
         } else {
             const parsedData = JSON.parse(data);
             parsedData.push(content);
             writeToFile(file, parsedData);
         }
     })
 }
 module.exports = {readFromFile, writeToFile, readAndAppend};