const InboxEmail = require('../InboxEmail');

describe('InboxEmail', ()=>{
    it('has a module', ()=>{
        expect(InboxEmail).toBeDefined();
        const expected = 'function';
        const actual = typeof InboxEmail;
        expect(expected).toEqual(actual);
    });

    it('should return an empty string for invalid incoming email', ()=>{
       const incoming_email = {};
       const expected = {
           id: '',
           subject: '',
           body: '',
           time_stamp: '',
           viewed_at: '',
           receipients: '',
           type: '',
           is_important: false
       };
       const actual = InboxEmail(incoming_email);
       expect(expected).toEqual(actual);
    });

    it('should return correct values for valid incoming email', ()=>{
        const date_time = '2018-08-19T09:29:21.318Z';
        const formatted_date = '2018-08-19 09:29';

        const incoming_mail = {
            _id: '1',
            subject:'foo',
            message: 'bar',
            is_important: false,
            receipients:['foo@bar.gh', 'bar@foo.gh'],
            viewed_at: undefined,
            type:'draft',
            time_stamp: Date.parse(date_time)
        };
        const expected = {
            id: '1',
            subject:'foo',
            body:'bar',
            is_important: false,
            receipients:'foo@bar.gh, bar@foo.gh',
            viewed_at:'',
            type:'draft',
            time_stamp: formatted_date
        };

        const actual = InboxEmail(incoming_mail);
        expect(expected).toEqual(actual);
    });
});