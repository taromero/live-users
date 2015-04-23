Meteor.methods({
  setSnapshot: function(snapshot, effect) {
    return Meteor.users.update(Meteor.userId(), { $set: { snapshot: snapshot, effect: effect } })
  }
})
