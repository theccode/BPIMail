const mongoose = require('mongoose');
const EmailModel = require('../EmailModel')

describe('EmailModel', ()=>{
    let db;
    beforeAll(done =>{
        db:mongoose.connect('mongodb://localhost:27017/test', done);
    });

    afterAll(done=>{
        db.close(done);
    });

    beforeEach(done=>{
        EmailModel.remove({}, done);
    });

    it('correctly serializes the model', async ()=>{
        const subject = 'foo';
        const message = 'bar';
        const receipients = ['foo@bar.gh'];
        const time_stamp = new Date('31-07-23T19:42:41.897Z');
        const email = new EmailModel({receipients, subject, message, time_stamp});
        await email.save();

        const email_in_database = await EmailModel.findById(email.id);

        const expected = {
            receipients,
            is_important: false,
            _id: email.id,
            subject,
            message,
            time_stamp,
            _v:0
        };
        const expected_string = JSON.stringify(expected);
        const actual = JSON.stringify(email_in_database);

        expect(expected).toEqual(actual);
    });
})