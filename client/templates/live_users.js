Template.live_users.rendered = function() {
  Camera.keepUserSnapshotUpdated()
}

Template.live_users.onCreated(function() {
  this.subscribe('live-users')
})

Template.live_users.helpers({
  otherUsers: function() {
    return Meteor.users.find({ _id: { $ne: Meteor.userId() } })
  },
  user: function() {
    return Meteor.user()
  }
})

