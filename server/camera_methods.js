Meteor.methods({
  setSnapshot: function(snapshot) {
    return Meteor.users.update(Meteor.userId(), { $set: { 'profile.snapshot': snapshot } })
  }
})
