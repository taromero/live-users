// this obj is initialized on 'video' template
Camera = {
  canvas: null,
  canvasCtx: null,
  video: null,
  takeSnapshot: function() {
    if (Camera.video.src) {
      Camera.canvasCtx.drawImage(Camera.video, 0, 0, 116, 92) // (src, x, y, width, height)
      return Camera.canvas.toDataURL('image/jpeg')
    }
  },
  keepUserSnapshotUpdated: function() {
    Meteor.setInterval(Camera.refreshUserSnapshot, 1000)
  },
  refreshUserSnapshot: function() {
    var snapshot = Camera.takeSnapshot()
    Meteor.call('setSnapshot', snapshot)
  }
}
