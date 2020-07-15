const SendEmailRequest = require('../SendEmailRequest');

describe('SendEmailRequest', ()=>{
    it('has a module', ()=>{
        expect(SendEmailRequest).toBeDefined();
        const expected = 'function';
        const actual = typeof SendEmailRequest;
        expect(expected).toEqual(actual);
    });

    it('constructs the correct request', ()=>{
        const receipients = 'foo';
        const subject = 'bar';
        const message = 'foobar';

        const data = {
            receipients: ['foo'],
            subject,
            message
        };

        const expected = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        };

        const actual = SendEmailRequest(receipients, subject, message);
        expect(expected).toEqual(actual); 
    });

    it('turns receipients string into an array of emails', ()=>{
        const receipients = 'foo@bar.gh foo@bar.gh, foo@bar.gh;  foo@bar.gh';
        const subject = 'bar';
        const message='foobar';
        const data = {
            receipients: ['foo@bar.gh', 'foo@bar.gh', 'foo@bar.gh', 'foo@bar.gh'],
            subject,
            message
        };
        const expected = {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        };
        const actual = SendEmailRequest(receipients, subject, message);
        expect(expected).toEqual(actual);
    })
})