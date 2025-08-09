const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    work: {
      type: String,
      required: true,
      enum: ['chef', 'manager', 'waiter']
    }
});

const Person = mongoose.model('Person', personSchema);
console.log('✅ Person model created');
module.exports = Person;
