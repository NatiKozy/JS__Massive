// 1.Сохраните в переменную массив
// 2.Вызовите метод forEach у массива
// 3.В функцию обработчик добавьте код, который относится к работе с DOM
// 4.В найденные элементы на странице добавьте информацию из каждого элемента массива
// 5.Создайте новый массив topFilmsList, в нём должны быть лучшие фильмы режиссёров (они хранятся в полях top_rated_film)

const block = document.querySelector(".block");
const array = [
      {
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссер, Актер, Сценарист, Монтажер',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
      },
      {
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссер, Оператор, Монтажер, Актер, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
      },
      {
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссер, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
      },
      {
        name: 'Алексей Балабанов',
        career: 'Режиссер, Сценарист, Актер, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
      },
      {
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссер, Сценарист, Актер',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зеленая книга'
      },
      {
        name: 'Юрий Быков',
        career: 'Актер, Режиссер, Сценарист, Композитор, Монтажер, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
      },
      {
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажер, Актер, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
      },
    ];

array.forEach((element) => {
  const nameText = document.createElement("p");
  nameText.classList.add ("name")
  nameText.textContent = element.name;

  const careerText = document.createElement('p');
  careerText.classList.add ("career");
  careerText.textContent = element.career;

  const filmsText = document.createElement('a');
  filmsText.classList.add ("films");
  filmsText.setAttribute('href', element.films);
  filmsText.innerHTML = "Фильмография";
  filmsText.target = '_blank';

  block.append(nameText);
  block.append(careerText);
  block.append(filmsText);

});

const topFilmsList = array.map(function(element) {
  return element.top_rated_film;
});
console.log(topFilmsList);

const body = document.querySelector(".body");

const div = document.createElement('div');
div.classList.add('small_block');
div.innerHTML = topFilmsList;
body.append(div);

//Реализуйте и экспортируйте по умолчанию функцию, которая возвращает длину последнего слова переданной на вход строки. Словом считается любая последовательность, не содержащая пробелов
const getLastWordLength = (str) => {
  const words = str.trim().split(' ');
  const lastWord = words[words.length - 1];
  return lastWord.length;
};

console.log(getLastWordLength(''));
console.log(getLastWordLength('man in BlacK'));
console.log(getLastWordLength('hello, world!  '));
console.log(getLastWordLength('   I  learn JavaScript  '));