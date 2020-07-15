const postcss_imports = require("postcss-import");

module.exports = {
    parser: "postcss",
    plugins: [postcss_imports()]
};