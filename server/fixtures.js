Meteor.startup(function() {
  if (Books.find().count() === 0) {
    Books.insert({ name: 'Book 1' });
    Books.insert({ name: 'Book 2' });
    Books.insert({ name: 'Book 3' });
    Books.insert({ name: 'Book 4' });
    Books.insert({ name: 'Book 5' });
  }
});