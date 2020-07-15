const React = require("react");
const Header = require("../header/Header");
const Router = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Inbox = require("../inbox/Inbox");
const Paths = require("../../config/paths");
const NavigationBar = require("../navigationBar/NavigationBar");

module.exports = () => {
    return (
        <Router>
            <div>
                <Header />
                <div className="content">
                    <NavigationBar />
                    <Route exact path={Paths.root} component={Inbox} />
                    <Route path={Paths.inbox} component={Inbox} />
                    <Route path={Paths.important} component={Inbox} />
                    <Route path={Paths.sentMail} component={Inbox} />
                    <Route path={Paths.drafts} component={Inbox} />
                    <Route path={Paths.spam} component={Inbox} />
                </div>
            </div>
        </Router>
    );
};