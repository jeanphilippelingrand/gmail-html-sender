// this is the core of the app
// read the html file
// send it by email

const fs = require('fs');

const Send = function(input) {
  return new Promise((resolve, reject) => {

    const send = require('gmail-send')(input);

    send({},function(err, data) {
      if(err) {
        return reject(err);
      }
      resolve(data);
    })
  })
}

const readFile = function(path){
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", function(err, data) {
      if (err) {
        return reject(err);
      }
      resolve(data.toString());
    })
  })
}

module.exports.readAndSend = function(params) {

  console.log('read html and send starting');

  let emailData = {};
  Object.assign(emailData, params.email);

  let filePath = params.filePath
  
  if(!filePath){
    filePath = 'mail.html';
  }
  
  readFile(filePath).then(html => {
  
    console.log('file read succeeded');

    emailData.html = html;
    
    Send(emailData).then(() => {
      console.log('The email has been sent')
    }).catch(err => {
      console.error('error trying to send the email ', err)
    });

  }).catch(err => {
    console.error('error trying to read file ', err)
  });

}
