Template.live_users.rendered = function() {
  Camera.keepUserSnapshotUpdated()
}

Template.live_users.helpers({
  otherUsers: function() {
    return Meteor.users.find({ _id: { $ne: Meteor.userId() } })
  },
  user: function() {
    return Meteor.user()
  }
})

Template.live_users.events({
  'click #user-snapshot': function() {
    var currentFilter = Session.get('status.class')
    var toggleFilter = (!currentFilter ? 'blur' : '')
    Session.set('status.class', toggleFilter)
  }
})
