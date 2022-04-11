const nodemailer = require('nodemailer');
const User = require('./model/model');
require('dotenv').config()
const otp=Math.floor(Math.random() * 999999) + 100000;

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.UPASSWORD
  }
});

var mailOptions = {
  from: process.env.USER_MAIL,
  to: process.env.RMAIL,
  subject: 'Sending Email using Node.js',
  text: 'Your one time password!',
  html:'<h1>This is your otp:</h1>'+otp+'<h3>Thankyou</h3>',
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

var new_user = new User({
  number:otp
})

new_user.save(function(err,result){
  if (err){
      console.log(err);
  }
  else{
      console.log(result)
  }
})