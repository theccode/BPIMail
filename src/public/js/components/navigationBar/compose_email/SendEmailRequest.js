const SendEmailRequest = (receipients_string, subject, message) => {
    const regex = /(\s|,|;|\t)/;
    const receipients = receipients_string
        .split(regex)
        .filter(str => str.trim())
        .filter(str => regex.test(str) === false);
    const data = {
        receipients,
        subject,
        message
    };

    const request = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    };

    return request;
};

module.exports = SendEmailRequest;
