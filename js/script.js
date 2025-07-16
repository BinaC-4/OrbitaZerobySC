document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);

  fetch('https://formsubmit.co/7ee20db5da3829402c93a303d5caad8e', {
    method: 'POST',
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      form.reset();
      document.getElementById('mensagemEnviada').style.display = 'block';
    } else {
      alert('Erro ao enviar feedback.');
    }
  }).catch(() => {
    alert('Erro na conexão. Tente novamente mais tarde.');
  });
});

