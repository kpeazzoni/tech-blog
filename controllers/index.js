const router = require('express').Router();
const dashboardRoutes = require('./dashboard-routes');
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

//export time
module.exports = router;