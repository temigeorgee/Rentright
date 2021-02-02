const app = require('./app');


app.listen(process.env.PORT || 3000, () => {
    console.log('Server listening on Port 3000...')
});