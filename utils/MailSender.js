'use strict'

const nodemailer = require('nodemailer')

class MailSender {
    /**
     * sendMail
     * Sends html emails to specified email address(es)
     * @param {string} to
     * @param {string} subject
     * @param {string} html
     */
    async sendMail (to, subject, html) {
        let transporter = await MailSender.prototype.createTransporter()
        let mailOptions = {
            from: '"PageRings" <homebuyer@encapsulatech.com>',
            to: to,
            subject: subject,
            html: html
        }
        let response = await transporter.sendMail(mailOptions)
        return response
    }

    /**
     * createTransporter
     * Creates a nodemailer test account and transporter and returns a promise to resolve
     * when the transporter is created.
     */
    async createTransporter () {
        return new Promise((resolve, reject) => {
            nodemailer.createTestAccount((err, account) => {
                let transporter = nodemailer.createTransport({
                    service: 'gmail',
                   // host: 'server225.web-hosting.com',
                   auth: {
                    user: 'ahmad.suddle@gmail.com',
                    pass: 'librasuddle12'
                },
                   port: 465,
                    secure: false,
                    tls: { rejectUnauthorized: false }
                })
                if (err) { reject(err) } else resolve(transporter)
            })
        })
    }
}

const mailSender = new MailSender()
module.exports = { mailSender }