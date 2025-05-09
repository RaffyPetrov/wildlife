const authController = require('../controllers/auth.js');
const homeController = require('../controllers/home.js');
const postController = require('../controllers/post.js');

module.exports = (app) => {
    app.use(homeController);
    app.use(authController);
    app.use(postController);
}