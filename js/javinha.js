// Selecione o formulário
const formulario = document.querySelector('form');

// Adicione evento de submit ao formulário
formulario.addEventListener('submit', (e) => {
  // Evite o comportamento padrão do formulário
  e.preventDefault();

  // Pega os valores dos campos
  const nome = document.querySelector('#nome').value;
  const email = document.querySelector('#email').value;
  const senha = document.querySelector('#senha').value;
  const confirmaSenha = document.querySelector('#confirma-senha').value;

  // Verifica se os campos estão preenchidos
  if (nome === '' || email === '' || senha === '' || confirmaSenha === '') {
    alert('Por favor, preencha todos os campos.');
  } 
  // Verifica se as senhas coincidem
  else if (senha !== confirmaSenha) {
    alert('As senhas não coincidem.');
  } 
  // Se tudo estiver correto
  else {
    alert('Cadastro realizado com sucesso!');
    // Limpar os campos após o cadastro
    formulario.reset();
  }
});
