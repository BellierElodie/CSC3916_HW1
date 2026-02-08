const express = require('express');
const app = express();
const PORT = ProcessingInstruction.env.PORT || 3000;

app.use(express.raw({type: '*/*'})); //capture all types

app.post('/', (req, res) => {
    const contentType = req.get('Content-Type') || 'text/plain';
    res.set('Content-Type', contentType);
    const body = req.body && req.body.length > 0 ? req.body : '';
    res.send(body);
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log('Echo server listening on port ${PORT}');
    });
};

module.exports = app;
