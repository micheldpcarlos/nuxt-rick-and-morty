const https = require("https");

let page = 1;
const data = [];

const writeFile = () => {
  const jsonString = JSON.stringify(data);
  const fs = require('fs');
  fs.writeFile('public/data/characters.json', jsonString, 'utf8', () => {
    console.log("FILE CREATED!");
  });
};

/**
 * RECURSIVELLY GET ALL PAGES AND WRITE A JSON FILE
 * requires a public/data folder (I wont implement it 🙃)
 * 
 * @param {*} url - character data url 
 */
const getPage = (url) => {
  console.log("GETTING:", url);
  https
    .get(url, (res) => {
      let body = "";

      res.on("data", (chunk) => {
        body += chunk;
      });

      res.on("end", () => {
        try {
          const json = JSON.parse(body);
          data.push(...json.results);

          if (json.info.next) {
            getPage(json.info.next);
          } else {
            writeFile();
          }
        } catch (error) {
          console.error(error.message);
        };
      });
    });
};

// getInitialPage
getPage("https://rickandmortyapi.com/api/character?page=1");