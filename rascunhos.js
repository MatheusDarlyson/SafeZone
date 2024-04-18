// CODIGOS EM JS QUE SÃO RASCUNHOS, PARA NÃO SE PERDEREM


// // Alert de cadastro de risco com sucesso
// document.addEventListener("DOMContentLoaded", function() {
//     // Seleciona o formulário pelo ID
//     var form = document.querySelector('form#cadastroPontoRiscoForm');
//     // Verifica se o formulário existe antes de adicionar o event listener
//     if (form) {
//         // Adiciona um event listener para o evento "submit" do formulário
//         form.addEventListener('submit', function(event) {
//             // Evita que o formulário seja enviado e a página recarregada
//             event.preventDefault();
//             // Simula o cadastro de usuário (substitua este trecho pelo código de cadastro real)
//             // Aqui você pode enviar os dados do formulário para o backend ou realizar ação equivalente
//             // Suponha que o cadastro foi realizado com sucesso
//             alert("Cadastro realizado com sucesso!");
//             // Redireciona para a tela de login após o cadastro
//             window.location.href = "/riscosCadastrados.html";
//         });
//     }
// });



// // Alert de cadastro de risco com sucesso
// document.addEventListener("DOMContentLoaded", function() {
//     // Seleciona o formulário pelo ID
//     var form = document.querySelector('form#cadastroPontoRiscoForm');
//     // Verifica se o formulário existe antes de adicionar o event listener
//     if (form) {
//         // Adiciona um event listener para o evento "submit" do formulário
//         form.addEventListener('submit', function(event) {
//             // Evita que o formulário seja enviado e a página recarregada
//             event.preventDefault();
//             // Simula o cadastro de usuário (substitua este trecho pelo código de cadastro real)
//             // Aqui você pode enviar os dados do formulário para o backend ou realizar ação equivalente
//             // Suponha que o cadastro foi realizado com sucesso
//             alert("Cadastro realizado com sucesso!");
//             // Redireciona para a tela de login após o cadastro
//             window.location.href = "/riscosCadastrados.html";
//         });
//     }
// });


// // Script de coleta de foto/vídeo
// function getUserMedia(options, successCallback, failureCallback) {
//     var api = navigator.getUserMedia || navigator.webkitGetUserMedia ||
//       navigator.mozGetUserMedia || navigator.msGetUserMedia;
//     if (api) {
//       return api.bind(navigator)(options, successCallback, failureCallback);
//     }
//   }
  
//   var theStream;
  
//   function getStream() {
//     if (!navigator.getUserMedia && !navigator.webkitGetUserMedia &&
//       !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
//       alert('User Media API not supported.');
//       return;
//     }
    
//     var constraints = {
//       video: true
//     };
  
//     getUserMedia(constraints, function (stream) {
//       var mediaControl = document.querySelector('video');
//       if ('srcObject' in mediaControl) {
//         mediaControl.srcObject = stream;
//       } else if (navigator.mozGetUserMedia) {
//         mediaControl.mozSrcObject = stream;
//       } else {
//         mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
//       }
//       theStream = stream;
//     }, function (err) {
//       alert('Error: ' + err);
//     });
//   }
  
//   function takePhoto() {
//     if (!('ImageCapture' in window)) {
//       alert('ImageCapture is not available');
//       return;
//     }
    
//     if (!theStream) {
//       alert('Grab the video stream first!');
//       return;
//     }
    
//     var theImageCapturer = new ImageCapture(theStream.getVideoTracks()[0]);
  
//     theImageCapturer.takePhoto()
//       .then(blob => {
//         var theImageTag = document.getElementById("imageTag");
//         theImageTag.src = URL.createObjectURL(blob);
//       })
//       .catch(err => alert('Error: ' + err));
//   }