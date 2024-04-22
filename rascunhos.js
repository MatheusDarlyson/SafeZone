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





// /////// Código com falhas, para revisão futura:  
// // Script para coletar os riscos cadastrados e exibir na página riscosCadastrados
// document.addEventListener("DOMContentLoaded", function() {
//   // Recupera os riscos cadastrados do armazenamento local (ou de onde quer que estejam armazenados)
//   var riscosCadastrados = JSON.parse(localStorage.getItem("riscos")) || [];
//   // Seleciona o elemento onde os riscos serão exibidos
//   var listaRiscos = document.getElementById("listaRiscos");
//   // Verifica se há riscos cadastrados
//   if (riscosCadastrados.length === 0) {
//       listaRiscos.innerHTML = "<p>Nenhum risco cadastrado ainda.</p>";
//   } else {
//       // Cria uma lista de riscos
//       var listaHTML = "<ul>";
//       riscosCadastrados.forEach(function(risco) {
//           listaHTML += "<li><strong>Setor / Área:</strong> " + risco.area + "<br>";
//           listaHTML += "<strong>Data:</strong> " + risco.date + "<br>";
//           listaHTML += "<strong>Turno:</strong> " + risco.shift + "<br>";
//           listaHTML += "<strong>Descrição:</strong> " + risco.description + "</li><br>";
//           listaHTML += "<strong>Latitude:</strong> " + risco.latitude + "<br>";
//           listaHTML += "<strong>Longitude:</strong> " + risco.longitude + "<br>";
//           listaHTML += "<video controls><source src='" + risco.videoUrl + "' type='video/mp4'></video><br>";
//           listaHTML += "<img src='" + risco.imageUrl + "' alt='Imagem do Risco'><br>";
//       });
//       listaHTML += "</ul>";
//       // Insere a lista de riscos na página
//       listaRiscos.innerHTML = listaHTML;
//   }
// });