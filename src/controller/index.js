const HomePageController = require('./HomePageController.js');
const DeveloperPageController = require('./DeveloperPageController.js');
const CoursePageController = require('./CoursePageController.js');

module.exports = function(router) {
    HomePageController(router);
    DeveloperPageController(router);
    CoursePageController(router);

    return router;
};
