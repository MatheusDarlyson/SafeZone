// Alert de cadastro de usuário com sucesso
document.addEventListener("DOMContentLoaded", function() {
  // Seleciona o formulário pelo ID
  var form = document.querySelector('form#cadastroNovoUsuarioForm');
  // Verifica se o formulário existe antes de adicionar o event listener
  if (form) {
      // Adiciona um event listener para o evento "submit" do formulário
      form.addEventListener('submit', function(event) {
          // Evita que o formulário seja enviado e a página recarregada
          event.preventDefault();
          // Simula o cadastro de usuário (substitua este trecho pelo código de cadastro real)
          // Aqui você pode enviar os dados do formulário para o backend ou realizar ação equivalente
          // Suponha que o cadastro foi realizado com sucesso
          alert("Cadastro realizado com sucesso!");
          // Redireciona para a tela de login após o cadastro
          window.location.href = "/index.html";
      });
  }
});

// Script de captar localização
var target = document.getElementById('target');
var watchId;

function appendLocation(location, verb) {
verb = verb || 'updated';
var newLocation = document.createElement('p');
newLocation.innerHTML = 'Location ' + verb + ': ' + location.coords.latitude + ', ' + location.coords.longitude + '';
target.appendChild(newLocation);
}

if ('geolocation' in navigator) {
document.getElementById('askButton').addEventListener('click', function (evento) {
  evento.preventDefault();
  navigator.geolocation.getCurrentPosition(function (location) {
    appendLocation(location, 'fetched');
  });
  watchId = navigator.geolocation.watchPosition(appendLocation);
});
} else {
target.innerText = 'Geolocation API not supported.';
}


// Script de coleta de foto/vídeo
function getUserMedia(options, successCallback, failureCallback) {
  var api = navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.msGetUserMedia;
  if (api) {
    return api.bind(navigator)(options, successCallback, failureCallback);
  }
}

var theStream;

function getStream() {
  if (!navigator.getUserMedia && !navigator.webkitGetUserMedia &&
    !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
    alert('User Media API not supported.');
    return;
  }
  
  var constraints = {
    video: true
  };

  getUserMedia(constraints, function (stream) {
    // var mediaControl = document.querySelector('video');
    // if ('srcObject' in mediaControl) {
    //   mediaControl.srcObject = stream;
    // } else if (navigator.mozGetUserMedia) {
    //   mediaControl.mozSrcObject = stream;
    // } else {
    //   mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
    // }
    theStream = stream;
  }, function (err) {
    alert('Error: ' + err);
  });
}

window.onload = getStream;

function takePhoto() {
  if (!('ImageCapture' in window)) {
    alert('ImageCapture is not available');
    return;
  }
  
  if (!theStream) {
    alert('Grab the video stream first!');
    return;
  }
  
  var theImageCapturer = new ImageCapture(theStream.getVideoTracks()[0]);

  theImageCapturer.takePhoto()
    .then(blob => {
      var theImageTag = document.getElementById("imageTag");
      theImageTag.src = URL.createObjectURL(blob);
    })
    .catch(err => alert('Error: ' + err));
}