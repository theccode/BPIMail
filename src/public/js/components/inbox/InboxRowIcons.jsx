const React = require('react');
const IconButton = require('@material-ui/core/IconButton').default
const StarIcon = require('@material-ui/icons/Star').default;
const StarBorderIcon = require('@material-ui/icons/StarBorder').default;

class InboxRowIcons extends React.Component{
    constructor(){
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        alert(`Set this ${this.props.email_id} to important`);
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <IconButton onClick={this.onClick}>
                    {this.props.is_important ? <StarIcon className="inbox__star" /> :
                    <StarBorderIcon />}
                </IconButton>
            </div>
        );
    }
}
module.exports = InboxRowIcons;