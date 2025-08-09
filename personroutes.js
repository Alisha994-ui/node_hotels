const router= require('express').Router();
const Person = require('./person'); // Model

router.post('/', async (req, res) => {
    try {
        const person = new Person(req.body);
        await person.save();
        console.log('✅ Person created:', person);
        res.status(201).send("Person is saved");
    } catch (err) {
        res.status(400).send('Error creating person: ' + err);
    }
});

router.get('/:worktype', async (req, res) => {
    try {
        const worktype = req.params.worktype
        const people = await Person.find({ work: worktype });
        console.log('✅ People fetched:');
        res.status(200).json(people);
    } catch (err) {
        res.status(500).send('Error fetching people: ' + err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedpersondata=req.body;
       
        const person = await Person.findByIdAndUpdate(personId, updatedpersondata, { new: true , runValidators: true });
        if (!person) {
            return res.status(404).send('Person not found');
        }
        console.log('✅ Person updated:', person);
        res.status(200).json(person);
    } catch (err) {
        res.status(400).send('Error updating person: ' + err);
    }
}); 

router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const person = await Person.findByIdAndDelete(personId);
        if (!person) {
            return res.status(404).send('Person not found');
        }
        console.log('✅ Person deleted:', person);
        res.status(204).send("Deleted Successfully");
    } catch (err) {
        res.status(400).send('Error deleting person: ' + err);
    }
});

module.exports = router;
