const EmailModel = require('./email_service/EmailModel');
const EmailService = require('./email_service/EmailService');

const email_service = new EmailService(EmailModel);

module.exports  = {
    email_service
};