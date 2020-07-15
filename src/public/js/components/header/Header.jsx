const React = require('react');
const Input = require("@material-ui/core/Input").default;
const Button = require("@material-ui/core/Button").default;
const SearchIcon = require("@material-ui/icons/Search").default;

class Header extends React.Component{
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        alert("Submit button clicked");
    }
    render(){
        return(
            <header className="header">
                <span className="header__logo">BPIMail</span>
                <form className="header__search-form" onSubmit={this.onSubmit}>
                    <Input fullWidth className="header__search-field" placeholder="Search..." />
                    <Button type="submit" variant="contained" color="primary">
                        <SearchIcon />
                    </Button>
                </form>
            </header>
        );
    }
}
module.exports = Header;