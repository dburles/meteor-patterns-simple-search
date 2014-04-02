Deps.autorun(function() {
  Meteor.subscribe('booksSearch', Session.get('booksSearchQuery'));
});

Template.books.events({
  'keyup input[type="text"]': function(event, template) {
    Session.set('booksSearchQuery', event.target.value);
  }
});

Template.books.helpers({
  searchResults: function() {
    return Books.search(Session.get('booksSearchQuery'));
  },
  booksSearchQuery: function() {
    return Session.get('booksSearchQuery');
  }
});