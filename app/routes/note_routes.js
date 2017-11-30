// routes/note_routes.js

module.exports = function(app, db) {
    app.post('/notes', (req, res)=> {
        //you'll create your note here
        const note = { text: req.body.body, title: req.body.title };
        db.collection('notes').insert(note, (err, result) => {
            if (err)
            {
                res.send({ 'error': 'an error has occured'});
            }
            else
            {
                res.send(result.ops[0]);
            }
        });
    });
};