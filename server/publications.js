Meteor.publish('booksSearch', function(query) {
  check(query, String);
  
  if (_.isEmpty(query))
    return this.ready();

  return Books.search(query);
});