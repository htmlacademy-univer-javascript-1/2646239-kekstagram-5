import * as data from './data.js';

let autoIncrementId = 0;

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
  return data.URL_PREFIX + String(id) + data.URL_SUFFIX;
};

const generateAvatar = function() {
  return data.AVATAR_PREFIX + getRandomNumber(1, 7) + data.AVATAR_SUFFIX;
};


const generateComment = function() {
  return {
    id: getRandomNumber(0, 1001),
    avatar: generateAvatar(),
    message: getRandomElementFromArray(data.MESSAGES, data.MESSAGES.length),
    name: getRandomElementFromArray(data.NAMES, data.NAMES.length)
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
    description: getRandomElementFromArray(data.DESCRIPTIONS, data.DESCRIPTIONS.length),
    likes: Math.floor(getRandomNumber(15, 201)),
    comments: generateArrayOfComments()
  };
};

export const generateArrayOfPosts = function() {
  autoIncrementId = 0;
  const arrayOfPosts = [];

  for (let i = 0; i < data.POST_COUNT; i += 1) {
    const post = generatePost();
    arrayOfPosts.push(post);
  }

  return arrayOfPosts;
};
