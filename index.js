const sender = require('emailSender.js');

const emailConfig = {
  user: '<your gmail email address>',
  pass: '<your gmail application password>',
  to:   '<the recipient email address>',
  subject: '<the subject'
}
const filePath = "<the html file path here>"

const params = {
  filePath: filePath,
  email: emailConfig
}

sender(params);