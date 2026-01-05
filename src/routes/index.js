const express = require('express');
const hostController = require('../controllers/hostController');

function setRoutes(app) {
    const router = express.Router();

    router.post('/process-xml-files', hostController.processXmlFiles);

    app.use('/api', router);
}

module.exports = setRoutes;