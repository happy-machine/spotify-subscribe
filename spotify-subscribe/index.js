const fs = require('fs');

module.exports.handler = async (event, context) => {
  console.log({ event });
  console.log({ context });
  // Read the HTML file from disk
  const html = fs.readFileSync('index.html', 'utf-8');
  // Read the CSS file from disk
  const css = fs.readFileSync('styles.css', 'utf-8');

  // Build the HTML response with the CSS stylesheet included
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
        </body>
      </html>
    `,
  };

  return response;
};
