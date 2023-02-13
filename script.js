const luckMessages = [
  'A vida trará coisas boas se tiver paciência.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Uma bela flor é incompleta sem as suas folhas.',
  'O riso é a menor distância entre duas pessoas.',
  'Os defeitos são mais fortes quando o amor é fraco.',
  'A sorte favorece a mente bem preparada.',
  'Quem olha para fora sonha; quem olha para dentro acorda.',
  'Espere pelo mais sábio dos conselhos: o tempo.',
  'Deixe de lado as preocupações e seja feliz.',
  'A maior barreira para o sucesso é o medo do fracasso.',
  'A inspiração vem dos outros. A motivação vem de dentro de nós.',
  'Você sempre será a sua melhor companhia!',
];

let randomMessage = luckMessages[Math.round(Math.random() * luckMessages.length)];
const cookie = document.querySelector('#img');
const firstScreen = document.querySelector('.home');
const secondScreen = document.querySelector('.luck');
const newCookie = document.querySelector('#openCookie');
const cookieOpen = document.querySelector('.message p');

const toggleScreen = () => {
  firstScreen.classList.toggle('hide')
  secondScreen.classList.toggle('hide')
}

const handleOpenCookie = () => {
  toggleScreen()
  cookieOpen.innerText = `${randomMessage}`
}

const handleOpenNewCookie = () => {
  toggleScreen()
  location.reload()
  randomMessage = luckMessages[Math.round(Math.random() * luckMessages.length)];
}

const pressEnter = (e) => {
  if ( e.key == 'Enter' && firstScreen.classList.contains('hide') ) {
    handleOpenNewCookie()
  }
}

cookie.addEventListener('click', handleOpenCookie);
newCookie.addEventListener('click', handleOpenNewCookie);
document.addEventListener('keydown', pressEnter);