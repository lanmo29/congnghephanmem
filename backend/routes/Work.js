module.exports = app => {
    var Work = require('../controller/Work');
    var router = require('express').Router();

    router.post("/", Work.create);
    router.get('/', Work.findAll);
    router.get('/:id', Work.findOne);
    router.delete('/:id', Work.delete);
    router.patch('/:id', Work.update);

    app.use("/works", router);
}