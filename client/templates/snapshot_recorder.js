Template.snapshot_recorder.rendered = function() {
  Camera.video = document.querySelector('video')
  Camera.canvas = document.querySelector('canvas')
  Camera.canvasCtx = Camera.canvas.getContext('2d')

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  navigator.getUserMedia({ video: true }, setCameraSrc, console.log) 

  function setCameraSrc(stream) {
    Camera.video.src = window.URL.createObjectURL(stream)
  }
}


