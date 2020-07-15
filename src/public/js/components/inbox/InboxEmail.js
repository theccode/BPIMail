const format_timestamp = time_stamp => {
    const isoString = new Date(time_stamp).toISOString();
    const array = isoString.split('T');
    const date = array[0];
    const time = array[1].substring(0, array[1].length - 8);

    return `${date} ${time}`;
};

const InboxEmail = incoming_email => {
    const id = incoming_email.id || "";
    const subject = incoming_email.subject || "";
    const body = incoming_email.body || "";
    const viewed_at = incoming_email.viewed_at || "";
    const is_important = incoming_email.is_important || false;

    let maybe_timestamp = incoming_email.time_stamp || "";

    try {
        maybe_timestamp = format_timestamp(maybe_timestamp);
    }
    catch(error){
        console.error(error.message);
        maybe_timestamp = '';
    }

    return {
        id,
        subject,
        body,
        is_important,
        viewed_at,
        time_stamp: maybe_timestamp
    };
};

module.exports = InboxEmail;