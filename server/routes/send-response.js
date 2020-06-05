function sendResponse(res, data, msg, error) {

  var response = {
    code: 200,
    msg: '',
    data: data,
  };

  response.msg = msg;

  if (error) {
    response.code = 400;
    response.msg = 'Operation unsuccessed.';
  }

  res.status(200).send(response);

}

module.exports = sendResponse;











/* /**
 * Function to send rest API request to client for each request.
 * @param {any} res - Response Object.
 * @param {number} code - Response Code.
 * @param {array} data - Response Data.
 * @param {string} message -Response message.

function sendResponse(res, code, data, message) {

  let response = {
    code: code,
    msg: message,
    data: data,
  };

  res.status(200).send(response);
}
module.exports = sendResponse;*/