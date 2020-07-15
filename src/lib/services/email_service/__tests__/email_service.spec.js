const EmailService = require('../EmailService');

describe('EmailService', ()=>{
    it('has a module', ()=>{
        expect(EmailService).toBeDefined();
        const expected = 'function';
        const actual = typeof EmailService;
        expect(expected).toEqual(actual);
    });

});

describe('createEmail', ()=>{
    it('creates an email model', ()=>{
        const MockEmailModel = jest.fn();
        const receipients = ['foo@bar.gh'];
        const email_service = new EmailService(MockEmailModel);
        const subject = 'foobar';
        const message = 'foobar, foo, bar';
        email_service.create_email(receipients, subject, message);
        expect(MockEmailModel).toBeCalledWith({receipients, subject, message});
    })
});