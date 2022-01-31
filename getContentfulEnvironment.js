const contentful = require("contentful-management");
require("dotenv").config();

module.exports = function () {
    const client = contentful.createClient({
        accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
    });

    return client.getSpace(process.env.CONTENTFUL_SPACE_ID)
        .then((space) => space.getEnvironment("master"));
};