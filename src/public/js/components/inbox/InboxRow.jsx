const React = require('react');
const TableRow = require('@material-ui/core/TableRow').default;
const TableCell = require('@material-ui/core/TableCell').default;
const InboxRowIcons = require('./InboxRowIcons');
const Link = require('react-router-dom').Link;
const Paths = require('../../config/paths');

const InboxRow = ({email}) => {
    const class_name = email.viewed_at ? "inbox__table-row--viewed" : "inbox__table-row";

    return (
        <TableRow className={class_name}>
            <TableCell className="inbox__table-cell">
                <InboxRowIcons is_important={email.is_important} email_id={email.id} />
            </TableCell>
            <TableCell className="inbox__table-cell--bold">
                <Link className="link inbox__link" to={Paths.email(email.id)}>
                    {email.subject}
                </Link>
            </TableCell>
            <TableCell className="inbox__table-cell">
                <Link className="link inbox__link" to={Paths.email(email.id)}>
                    {email.body}
                </Link>
            </TableCell>
            <TableCell className="inbox__table-cell--bold">
                <Link className="link inbox__link" to={Paths.email(email.id)}>
                    {email.time_stamp}
                </Link>
            </TableCell>
        </TableRow>
    );
};

module.exports = InboxRow;
