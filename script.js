
//suavizações das transições pós cliques em botões de redirecionamento

document.querySelectorAll('.container__start').forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector('#tela-previa-projetos');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth'});
      }
    });
  });

  document.querySelectorAll('.botao-projetos').forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector('#tela-previa-projetos');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  document.querySelectorAll('.botao-sobre-mim').forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector('#tela-sobre-mim');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  document.querySelectorAll('.sobre-mim__voltar-inicio').forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector('#inicio');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
  
  document.querySelectorAll('.button-to-first-project').forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector('#first-project');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center'});
      }
    });
  });

  document.querySelectorAll('.button-to-second-project').forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector('#second-project');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center'});
      }
    });
  });
  
  document.querySelectorAll('.button-to-third-project').forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector('#third-project');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center'});
      }
    });
  });
  
  document.querySelectorAll('.button-to-final').forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector('#tela-sobre-mim');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center'});
      }
    });
  });