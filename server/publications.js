Meteor.publish('live-users', function() {
  return Meteor.users.find({ 'profile.online': true }, { fields: { 'profile.name': 1, 'profile.snapshot': 1 }})
})
