'use strict'
const { mailSender } = require('../utils/MailSender')
const { PromiseEjs } = require('../utils/PromiseEjs')
const { nodemailer }= require('nodemailer')
const { Response } = require('../utils/response')
class EmailController {


static async getEmail (req, res) {
  try {
    const Email = req.body.Email;
    console.log(Email);
    let html = await PromiseEjs.renderFile('./Email/Template.ejs', {})
    
    mailSender.sendMail(Email, 'Test email subject', html)
    return new Response(res, { success: true })
} catch (error) {
  console.log(error);
    ErrorHandler.sendError(res, error)
}

      }

  }
  

module.exports = { EmailController }












//   try {
//       const Email = req.body.Email;

//       console.log(Email);
// const transporter = nodemailer.createTransport({
// service: 'gmail',
// auth: {
//         user: 'ahmad.suddle@gmail.com',
//         pass: '**************'
// },
//  port: 465,
// secure: false,
// tls: { rejectUnauthorized: false }

// /*
//  *host: 'server225.web-hosting.com',
//  *post: 465,
//  *secure: true,
//  *username: 'homebuyer@encapsulatech.com',
//  *password: '**************',
//  *tls:{ rejectUnauthorized: false}
//  */
// })

// res.render('index', (err, data)=>{
//  if (err) {
//    console.log(err);
// } else {
//   const mailoption = {
//     from: 'ATSuddle <ahmad.suddle@gmail.com>',
//     to: Email,
//     subject: 'Test nodemailer',
//     text: 'Hello Worldd!',
//     html: data
//     }

// transporter.sendMail(mailoption, (err)=>{
//   if (err) {
//  console.log(err); 
// } else {
//  console.log('email sent successfully'); 
// }
//    })
// }
// })
//   } catch (err) {
//     console.log(err);
//   }
