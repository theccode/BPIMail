const React = require("react");
const Link = require("react-router-dom").Link;

const NavigationListItem = ({label, path, isSelected}) => {
    const className = isSelected ? "navigation-bar__li--selected":"navigation-bar__li";
    return(
        <li className={className}>
            <Link className="link" to={path}>
                {label}
            </Link>
        </li>
    );
};
module.exports = NavigationListItem;