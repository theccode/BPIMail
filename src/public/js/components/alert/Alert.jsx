const React = require('react');
const Dialogue = require('@material-ui/core/Dialog').default;
const DialogueTitle = require('@material-ui/core/DialogTitle').default;
const DialogueContent = require('@material-ui/core/DialogContent').default;
const DialogueContentText = require('@material-ui/core/DialogContentText').default;
const DialogueActions = require('@material-ui/core/DialogActions').default;
const Button = require('@material-ui/core/Button').default;


const Alert = ({open, on_close, title, text}) => {
    return (
        <Dialogue fullWidth open={open} onClose={on_close}>
            <DialogueTitle>
                {title}
            </DialogueTitle>
            <DialogueContent>
                <DialogueContentText>
                    {text}
                </DialogueContentText>
            </DialogueContent>
            <DialogueActions>
                <Button variant="contained" onClick={on_close} color="primary" autoFocus>
                    OK
                </Button>
            </DialogueActions>
        </Dialogue>
    );
};
module.exports = Alert;
