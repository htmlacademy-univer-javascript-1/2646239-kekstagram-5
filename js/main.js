const URL_PREFIX = 'photos/';
const URL_SUFFIX = '.jpg';

const AVATAR_PREFIX = 'img/photos';
const AVATAR_SUFFIX = '.svg';
const POST_COUNT = 25;

const DESCRIPTIONS = [
  'Просто красивое фото.',
  'Обожаю это фото.',
  'Буду публиковать чаще такое!',
  'Щас на таком.',
  'Нет слов.',
  'Я просто в шоке от увиденного...'
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Андрюха192',
  'Глеб Сасавот',
  'Твоя подружка',
  'Иван Золо',
  'Пользователь WhatsApp',
  'ОКнутый юзер'
];

let autoIncrementId = 0;

// from - inclusive
// to - exclusive
const getRandomNumber = function(from, to) {
  return Math.floor(Math.random() * (to - from) + from);
};

const getRandomElementFromArray = function(array, size) {
  return array[getRandomNumber(0, size)];
};

const generateId = function() {
  autoIncrementId += 1;
  return autoIncrementId;
};

const generateUrl = function(id) {
  return URL_PREFIX + String(id) + URL_SUFFIX;
};

const generateAvatar = function() {
  return AVATAR_PREFIX + getRandomNumber(1, 7) + AVATAR_SUFFIX;
};


const generateComment = function() {
  return {
    id: getRandomNumber(0, 1001),
    avatar: generateAvatar(),
    message: getRandomElementFromArray(MESSAGES, MESSAGES.length),
    name: getRandomElementFromArray(NAMES, NAMES.length)
  };
};

const generateArrayOfComments = function() {
  const commentsArray = [];

  for (let i = 0; i < getRandomNumber(0, 31); i += 1) {
    const comment = generateComment();
    commentsArray.push(comment);
  }

  return commentsArray;
};


const generatePost = function() {
  const id = generateId();
  return {
    id: id,
    url: generateUrl(id),
    description: getRandomElementFromArray(DESCRIPTIONS, DESCRIPTIONS.length),
    likes: Math.floor(getRandomNumber(15, 201)),
    comments: generateArrayOfComments()
  };
};

const generateArrayOfPosts = function() {
  const arrayOfPosts = [];

  for (let i = 0; i < POST_COUNT; i += 1) {
    const post = generatePost();
    arrayOfPosts.push(post);
  }

  return arrayOfPosts;
};

// eslint-disable-next-line no-console
console.log(generateArrayOfPosts());
