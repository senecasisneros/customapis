// let urlParts = req.url.match(/[^/]+/g) || [];   //puts params in url in an array or returning an empty array
// let path = urlParts[0];      ///'sqaure'
//
// switch(path) {
//   case 'square':
//
//     let num = parseInt(urlParts[1]);
//     require(`./${path}`)(num, res);
//     // require(`./${path}`)(num, res);
//     // squareRoute(num, res);
//
//
//     // let square = Math.pow(num, 2);        //square number taken from params
//     //   res.write(`${square}\n`);
//     //   res.end('Got it!\n');
//       break;
//   case 'age':
//       let birthStr = urlParts[1];
//       // res.write(`${now}\n`);
//       res.write( age(birthStr) );
//       res.end();
//       break;
//   default:
//       res.statusCode = 404;
//       res.end('Not found!\n')
//       break;
// }
// });
