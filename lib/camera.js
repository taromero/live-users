// this obj is initialized on 'video' template
Camera = {
  localMediaStream: null,
  canvas: null,
  canvasCtx: null,
  video: null,
  takeSnapshot: function() {
    if (Camera.localMediaStream) {
      var picW = 116
      var picH = 92

      Camera.canvasCtx.drawImage(Camera.video, 0, 0, picW, picH);

      return Camera.canvas.toDataURL('image/' + Session.get('imageType'))
    }
  },
  keepUserSnapshotUpdated: function() {
    Tracker.autorun(function() {
      var persistSnapshotInterval = 400
      var userSelfRefreshInterval = 2000
      counter = 0
      Meteor.setInterval(function() {
        var snapshot = Camera.refreshUserSnapshot()
        counter += userSelfRefreshInterval
        if (counter >= persistSnapshotInterval) {
          Camera.persisteUserSnapshot(snapshot)
          counter = 0
        }
      }, userSelfRefreshInterval)
    })
  },
  refreshUserSnapshot: function() {
    var snapshot = Camera.takeSnapshot()
    $('#user-snapshot').attr('src', snapshot)
  },
  persisteUserSnapshot: function(snapshot) {
    snapshot = snapshot || Camera.takeSnapshot()
    // For some reason, if we call Users.update directly here, we get an error on production:
    // 'Server sent add for existing id'
    Meteor.call('setSnapshot', snapshot, Session.get('status.class'))
  }
}
