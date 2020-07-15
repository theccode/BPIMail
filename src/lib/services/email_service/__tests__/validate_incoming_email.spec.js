const validate_incoming_email = require('../validate_incoming_email')

describe('validate_incoming_email', ()=>{
    it('has a module', ()=>{
        expect(validate_incoming_email).toBeDefined();
        const expected = 'function';
        const actual = typeof validate_incoming_email;
        expect(expected).toEqual(actual);
    })

    it('calls next if receipients is missing.', ()=>{
        const req = {
            body: {}
        }
        const next = jest.fn();
        const res = {}
        validate_incoming_email(req, res, next);
        expect(next).toBeCalledWith(
            new Error(
                'validation error: child "receipients" because it is required!'
            )
        );
    });

    it('calls next with an error if child receipients is not an array', ()=>{
        const req = {
            body:{
                receipients:'foobar'
            }
        };

        const res = {};
        const next = jest.fn();
        validate_incoming_email(req, res, next);
        expect(next).toBeCalledWith(
            new Error(
                'validation error: "receipients" must be an array'
            )
        )
    });

    it('calls next if receipients is supplied with invalid string', ()=>{
        const req = {
            body:{
                receipients: ['fails', 'foo@bar.gh']
            }
        };

        const res = {};
        const next = jest.fn();
        validate_incoming_email(req, res, next);
        expect(next).toBeCalledWith(
            new Error(
                'validation error: receipients failed because child at position 0 failed.'
            )
        );
    });

    it('calls next with an error if subject is missing', ()=>{
        const req = {
            body:{
                receipients: ['foo@bar.gh']
            }
        };

       const res = {};
       const next = jest.fn();
       validate_incoming_email(req, res, next);
       expect(next).toBeCalledWith(
           new Error(
               'validation error: subject fails becaues subject is required.'
           )
       );
    });

    it('calls next with an error if subject is not a string.', ()=>{
        const req = {
            body: {
                receipients: ['foo@bar.gh'],
                subject:1
            }
        };
       const res = {};
       const next = jest.fn();
       validate_incoming_email(req, res, next);
       expect(next).toBeCalledWith(
           new Error(
               'validation error: subject failed becaues subject is not a string'
           )
       );
    });

    it('calls next if subject is a string of length less than 1', ()=>{
        const req = {
            body:{
                receipients: ['foo@bar.gh'],
                subject: ''
            }
        };

        const res = {};
        const next = jest.fn();
        expect(next).toBeCalledWith(
            new Error(
                'validation error: "subject" failed because "subject" is of length < 1'
            )
        );
    });

    it('calls next with an error if the length of subject is > 255', ()=>{
        let subject = '';
        for (let i = 0; i < 255; i++){
            subject += 1
        }

        const req = {
            body: {
                receipients: 'foo@bar.gh',
                subject
            }
        };

        const res = {};
        const next = jest.fn();
        validate_incoming_email(req, res, next);
        expect(next).toBeCalledWith(
            new Error(
                'validation error: [subject] failed because its length is greater than 255'
            )
        );
    });

    it('calls next with an error if message is missing', ()=>{
        const req = {
            body: {
                receipients: 'foo@bar.gh',
                subject: ['foobar']
            }
        };

        const res = {};
        const next = jest.fn();
        validate_incoming_email(req, res, next);
        expect(next).toBeCalledWith(
            new Error(
                'validation error: [email] failed because message is missing'
            )
        );
    });

    it('calls next with an error if message is not a string/message format is invalid', ()=>{
        const req = {
            body:{
                receipients: 'foo@bar.gh',
                subject:['foobar'],
                message: -1
            }
        };
        const req = {};
        const next = jest.fn();
        validate_incoming_email(req, res, next);
        expect(next).toBeCalledWith(
            new Error(
                'validation error: [message] failed because [message] is not a string'
            )
        );
    });

    it('calls next if message is a string of length < 1', ()=>{
        const req = {
            body:{
                receipients: 'foo@bar.gh',
                subject:['foobar'],
                message: ''
            }
        };
        const res ={};
        const next = jest.fn();
        validate_incoming_email(req, res, next);
        expect(next).toBeCalledWith(
            new Error(
                'validation error: message failed because message length < 1'
            )
        );
    });

    it('call next if message length > 1000', ()=>{
        let message = '';
        for (let i = 0; i < 1000; i++){
            message += 1;
        }
        const req = {
            body:{
                receipients: 'foo@bar.gh',
                subject: ['foobar'],
                message
            }
        };
        const res = {};
        const next = jest.fn();
        validate_incoming_email(req, res, next);
        expect(next).toBeCalledWith(
            new Error(
                'validatoin error: message failed because message length > 1000'
            )
        )
    });

    it('calls next if everything is ok',()=>{
        const req = {
            body:{
                receipients: 'foo@bar.gh',
                subject: ['foobar'],
                message:'foobar bar, foo, barfoo'
            }
        }
        const res = {};
        const next = jest.fn();
        validate_incoming_email(req, res, rerq);
        expect(next).toBeCalledWith();
    })
});