const productRouter = require('./product')

function router(app){
    app.use('/product' ,productRouter)
    app.use('/', productRouter)
}

module.exports = router;