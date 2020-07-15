const React = require('react');
const Button = require('@material-ui/core/Button').default;
const NavigationList = require('./NavigationList');
const SendEmailRequest = require('./compose_email/SendEmailRequest');
const ComposeEmail = require('./compose_email/ComposeEmail');
const ComposeEmailOutcomeAlert = require('./ComposeEmailOutcomeAlert');

class NavigationBar extends React.Component{
    constructor(){
        super();
        this.state = {
            compose_email_open: false,
            error_alert_open: false,
            success_alert_open:false,
            error_msg: 'Something wrong has occured!'
            
        }
        this.on_compose = this.on_compose.bind(this);
        this.on_cancel = this.on_cancel.bind(this);
        this.on_send = this.on_send.bind(this);
        this.on_error_alert_close = this.on_error_alert_close.bind(this);
        this.on_success_alert_close = this.on_success_alert_close.bind(this);
    }

    on_compose(){
       this.setState({compose_email_open: true})
    }

    on_cancel(){
        this.setState({compose_email_open: false});
    }

    on_error_alert_close(){
        this.setState({
            error_alert_open: false
        });
    }

    on_success_alert_close(){this.setState({success_alert_open: false});}

    async on_send(e){
        e.preventDefault();
        const receipients = e.target.receipients.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;
        const request = SendEmailRequest(receipients, subject, message);

        try {
            const response = await fetch('/emails', request);
            if(!response.ok){
                const json = await response.json();
                throw new Error(json.error);
            }
            this.setState({compose_email_open: false, success_alert_open: true});
        } catch (error) {
            this.setState({
                compose_email_open: false,
                error_alert_open: true,
                error_msg: error.message
            });
        }
    }
    render(){
        return(
            <aside className="navigation-bar">
                <Button className="navigation-bar__compose-button" 
                variant="contained" 
                onClick={this.on_compose}
                color="secondary">
                    Compose
                </Button>
                <NavigationList />
                <ComposeEmail
                open={this.state.compose_email_open}
                on_cancel={this.on_cancel}
                on_send={this.on_send}
                />
                <ComposeEmailOutcomeAlert
                    error_alert_open={this.state.error_alert_open}
                    error_msg = {this.state.error_msg}
                    on_error_alert_close={this.on_error_alert_close}
                    success_alert_open={this.state.success_alert_open}
                    on_success_alert_close={this.on_success_alert_close}
                />
            </aside>
        );
    }
}
module.exports = NavigationBar;