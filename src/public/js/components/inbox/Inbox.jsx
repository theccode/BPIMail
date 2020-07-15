const React = require('react');
const Table = require('@material-ui/core/Table').default;
const TableBody = require('@material-ui/core/TableBody').default;
const InboxRow = require('./InboxRow');
const InboxEmail = require('./InboxEmail');
const timestamp_sort = require('./timestamp_sort');

class Inbox extends React.Component{
    constructor(){
        super();
        this.state = {emails: []};
    }

    async componentWillMount(){
        const response = await fetch('/emails');
        const json = await response.json();
        const sorted_emails = json.sort(timestamp_sort);
        const emails = sorted_emails.map(incoming_emails => InboxEmail(incoming_emails));
        this.setState({emails});
    }
    render(){
        return(
            <Table>
                <TableBody>
                    {this.state.emails.map(email => (
                        <InboxRow key={email.id} email={email} />
                    ))}
                </TableBody>
            </Table>
        );
    }
}
module.exports = Inbox;