const React = require('react');
const Dialogue = require('@material-ui/core/Dialog').default;
const DialogueTitle = require('@material-ui/core/DialogTitle').default;
const DialogueContent = require('@material-ui/core/DialogContent').default;
const DialogueAction = require('@material-ui/core/DialogActions').default;
const Button = require('@material-ui/core/Button').default
const TextField = require('@material-ui/core/TextField').default;

const ComposeEmail = ({open, on_cancel, on_send}) => {
    return(
        <Dialogue fullWidth scroll="paper" open={open} onClose={on_cancel}>
            <DialogueTitle>Compose Email</DialogueTitle>
            <DialogueContent>
                <form onSubmit={on_send}>
                    <TextField
                    required 
                    name="receipients" 
                    className="compose-email__text-field" 
                    label="Receipient"
                    />
                    <TextField
                    required 
                    name="subject" 
                    className="compose-email__text-field" 
                    label="Subject"
                    />
                    <TextField
                    required 
                    name="message" 
                    className="compose-email__message" 
                    label="Message"
                    rows="6"
                    multiline
                    fullWidth
                    />
                    <DialogueAction>
                        <Button variant="contained" onClick={on_cancel} color="secondary">
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" color="primary">
                            Send
                        </Button>
                    </DialogueAction>
                </form>
            </DialogueContent>
        </Dialogue>
    );
}
module.exports = ComposeEmail;