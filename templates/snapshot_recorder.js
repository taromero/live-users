// Session.set('acceptedCamera', false)

Template.snapshot_recorder.rendered = function() {
  Session.setDefault('imageType', 'jpeg')
  Camera.video = document.querySelector('video')
  Camera.canvas = document.querySelector('canvas')
  Camera.canvasCtx = Camera.canvas.getContext('2d')

  Camera.video.addEventListener('click', Camera.takeSnapshot, false)

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  // Not showing vendor prefixes or code that works cross-browser.
  navigator.getUserMedia({video: true}, function(stream) {
    Session.set('acceptedCamera', true)
    Camera.video.src = window.URL.createObjectURL(stream)
    Camera.localMediaStream = stream
  }, function (err, res) {
    console.log('err: ', err)
    console.log('res: ', res)
  })
}

Template.snapshot_recorder.helpers({
  picHeight: function() {
    return Session.get('picHeight') + 'px'
  },
  picWidth: function() {
    return Session.get('picWidth') + 'px'
  }
})

