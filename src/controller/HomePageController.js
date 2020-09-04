const path = require("path");

module.exports = function(router) {
    /**
     * @Route ("/", method="GET")
     */
    router.get('/', (request, response) => {
        response.sendFile(path.resolve('public/builds/desktop/HomePage/index.html'));
    });

    return router;
};
