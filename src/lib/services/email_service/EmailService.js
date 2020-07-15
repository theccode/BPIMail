class EmailService {
    constructor(EmailModel){
        this.EmailModel = EmailModel;
        this.create_email = this.create_email.bind(this);
    }

    create_email(receipients, subject, message){
        return new this.EmailModel({receipients, subject, message});
    }
}
module.exports = EmailService;