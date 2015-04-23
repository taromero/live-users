Meteor.publish('live-users', function() {
  return Meteor.users.find({}, { fields: { 'profile.name': 1, snapshot: 1 }})
})
