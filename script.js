const menuButton = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const form = document.querySelector('#budgetForm');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const nome = data.get('nome') || '';
  const cidade = data.get('cidade') || '';
  const ambiente = data.get('ambiente') || '';
  const mensagem = data.get('mensagem') || '';
  const texto = `Olá, sou ${nome}. Gostaria de um orçamento.%0A%0ACidade/Bairro: ${cidade}%0AAmbiente: ${ambiente}%0ADetalhes: ${mensagem}`;
  window.open(`https://wa.me/5551991046433?text=${texto}`, '_blank');
});
