// const fs = require('fs');
// const express = require('express');
// const app = express();

// const html = fs.readFileSync('index.html', 'utf-8');
// // Read the CSS file from disk
// const css = fs.readFileSync('styles.css', 'utf-8');

// app.get('/', (req, res) => {
//   const response = {
//     statusCode: 200,
//     headers: {
//       'Content-Type': 'text/html',
//     },
//     body: `
//       <html>
//         <head>
//           <style>${css}</style>
//         </head>
//         <body>
//           ${html}
//         </body>
//       </html>
//     `,
//   };
//   res.send(response);
// });

// app.get('/hello', (req, res) => {
//   res.send('Hello!');
// });

// console.log('change');

// module.exports.handler = async (event, context) => {
//   const request = {
//     method: event.httpMethod,
//     headers: event.headers,
//     query: event.queryStringParameters,
//     path: event.path,
//     body: event.body,
//   };
//   const response = await new Promise((resolve, reject) => {
//     app(
//       request,
//       {
//         send: (body) =>
//           resolve({
//             statusCode: 200,
//             headers: { 'Content-Type': 'text/html' },
//             body: body,
//           }),
//         status: (code) => ({
//           send: (body) =>
//             resolve({
//               statusCode: code,
//               headers: { 'Content-Type': 'text/html' },
//               body: body,
//             }),
//         }),
//       },
//       (err) => {
//         if (err) {
//           reject(err);
//         }
//       }
//     );
//   });
//   return response;
// };
