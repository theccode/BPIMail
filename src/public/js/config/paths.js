const paths = {
    root: "/",
    inbox: "/inbox",
    important: "/important",
    sentMail: "/sent-mail",
    drafts: "/drafts",
    spam: "/spam",
    email_template:"/emails/:id",
    email: email_id => `/emails/${email_id}`
};
module.exports = paths;