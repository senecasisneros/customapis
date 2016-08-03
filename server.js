'use strict'
const PORT = 3000;

const readline = require('readline');
const fs = require('fs');
const http = require('http');
const request = require('request');
const md5 = require('md5');
const moment = require('moment');
const lodash = require('lodash');
const SpellChecker = require('spellchecker');
// const filter = require('profanity-filter');


const server = http.createServer((req, res) => {

  // let urlParts = req.url.match(/[^/]+/g) || [];
  let [ , task, ...inputs] = req.url.split('/');

  switch (task) {
    case 'add':
      let sum = inputs.reduce( (num, next) => {
        return num + parseInt(next);
    },  0);
      res.write(`The sum is ${sum}\n`);
      res.end();
      break;

    case 'sub':
      let sub = inputs.reduce( (num, next) => {
        return parseInt(num) - parseInt(next);
    });
      res.write(`${sub}\n`);
      res.end();
      break;

    case 'multiply':
      let multiply = inputs.reduce( (num, next) => {
        return parseInt(num) * parseInt(next);
    });
      res.write(`${multiply}\n`);
      res.end();
      break;

    case 'divide':
      let divide = inputs.reduce( (num, next) => {
        return parseInt(num) / parseInt(next);
    });
      res.write(`${divide}\n`);
      res.end();
      break;

    case 'avatar':
      let email = urlParts[1];
      let hash = md5(email)
      let url = `http://www.gravatar.com/avatar/${hash}`;
      res.write(`${url}`);
      res.end();
      break;

    case 'sentence':
      let length = encodeURI(inputs).length;
      res.write(`${length}\n`);
      res.end();
      break;

    case 'words':
      let words = decodeURI(inputs).split(' ').length;
      res.write(`${words}`);
      res.end();
      break;

    case 'average':
      let words1 = decodeURI(inputs).split(' ').length;
      let average = words1.reduce( (num, next) => {
        return num + next / words1.length;
  });
      res.write(`${average}`);
      res.end();
      break;

    case 'birth':
      let birth = moment(inputs, "YYYYMMDD").fromNow();
      res.write(`${birth}\n`);
      res.end();
      break;

      case 'SpellChecker':
        let spell = SpellChecker.isMisspelled(inputs)
        if(spell === true) {
          res.write("That word is wrong");
        } else {
          res.write('The word is right')
        }
        res.end();
        break;
    default:
    res.write('done');
    res.end();
  }
});

server.listen(PORT, err =>  {
  console.log(err || `Server listening on port ${PORT}`);
})
