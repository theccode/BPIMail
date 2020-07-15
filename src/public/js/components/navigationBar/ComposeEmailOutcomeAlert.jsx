const React = require('react');
const Alert = require('../alert/Alert');

const ComposeEmailOutcomeAlert = props => {
    const {error_alert_open, error_msg, on_error_alert_close} = props;
    const {success_alert_open, on_success_alert_close} = props;

    return (
        <div>
            <Alert
                title="Email failed"
                text={error_msg}
                open={error_alert_open}
                on_close={on_error_alert_close}
            />
            <Alert 
                title="Message sent!"
                text="Your email has been sent"
                open={success_alert_open}
                on_close={on_success_alert_close}
            />
        </div>
    );
};
module.exports = ComposeEmailOutcomeAlert;

