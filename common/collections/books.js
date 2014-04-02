Books = new Meteor.Collection('books');

Books.search = function(query) {
  if (_.isEmpty(query))
    return;

  return Books.find({
    name: { $regex: RegExp.escape(query), $options: 'i' }
  });
};