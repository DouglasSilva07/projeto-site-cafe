document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      const feedback = document.createElement('div');
      feedback.style.padding = '1em';
      feedback.style.marginTop = '1em';
      feedback.style.borderRadius = '5px';

      if (!nome || !email || !mensagem) {
        feedback.textContent = 'Por favor, preencha todos os campos.';
        feedback.style.backgroundColor = '#f44336'; 
        feedback.style.color = 'white';
        form.appendChild(feedback);
        return;
      }

      if (!email.includes('@')) {
        feedback.textContent = 'Por favor, informe um email válido.';
        feedback.style.backgroundColor = '#f44336';
        feedback.style.color = 'white';
        form.appendChild(feedback);
        return;
      }

      // Salva no localStorage (exemplo de persistência local)
      const contato = { nome, email, mensagem, data: new Date().toISOString() };
      let contatos = JSON.parse(localStorage.getItem('contatos')) || [];
      contatos.push(contato);
      localStorage.setItem('contatos', JSON.stringify(contatos));

      feedback.textContent = 'Mensagem enviada com sucesso!';
      feedback.style.backgroundColor = '#4caf50'; 
      feedback.style.color = 'white';
      form.appendChild(feedback);

      form.reset();

      // Remove o feedback após 3 segundos
      setTimeout(() => feedback.remove(), 3000);
    });
  }
});

function toggleMenu() {
  const menu = document.querySelector('nav ul');
  menu.classList.toggle('active');
}


