const requestHandler = (req, res) => {
      const resData = {
            message: "Hello, World!",
            success: true,
            data: [1, 2, 3, 4, 5, 6, 7],
            url: req.url
      };

      res.setHeader('Content-Type', 'application/json');
      res.write(JSON.stringify(resData));
      res.end();
}
// module.exports = {
//       handler : requestHandler,
//       someText : "Test Data Handler"
// }

// module.exports.handler = requestHandler;
// module.exports.someText = "Test Data Handler";

exports.handler = requestHandler;
//exports.someText = "Test Data Handler";