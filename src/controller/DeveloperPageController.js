const path = require("path");

module.exports = function(router) {
    /**
     * @Route ("/developer", method="GET")
     */
    router.get('/developer', (request, response) => {
        response.sendFile(path.resolve('public/builds/desktop/DeveloperPage/index.html'));
    });

    /**
     * @Route ("/developer/:id", method="GET")
     */
    router.get('/developer/:id', (request, response) => {
        response.sendFile(path.resolve('public/builds/desktop/DeveloperPage/index.html'));
    });

    return router;
};
