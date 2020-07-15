const timestamp_sort = require('../timestamp_sort');

const Email = time_stamp =>{
    return {time_stamp};
}

describe('timestamp_sort', ()=>{
    it('has a module', ()=>{
        expect(timestamp_sort).toBeDefined();
        const expected = 'function';
        const actual = typeof timestamp_sort;
        expect(expected).toEqual(actual);
    })
})

it('sorts emails in descending order', ()=>{
    const email_one = Email(1000);
    const email_two = Email(1001);
    const email_three = Email(1002);

    const emails = [email_one, email_two, email_three];
    const expected = [email_three, email_two, email_one];
    const actual = emails.sort(timestamp_sort);
    expect(expected).toEqual(actual);
})