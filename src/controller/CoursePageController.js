const path = require("path");

module.exports = function(router) {
    /**
     * @Route ("/course", method="GET")
     */
    router.get('/course', (request, response) => {
        response.sendFile(path.resolve('public/builds/desktop/CoursePage/index.html'));
    });

    return router;
};
