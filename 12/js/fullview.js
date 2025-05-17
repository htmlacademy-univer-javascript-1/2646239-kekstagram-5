const bigPictureNode = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const commentTemplate = document.querySelector('#comment').content;
const commentList = bigPictureNode.querySelector('.social__comments');
const commentsLoader = bigPictureNode.querySelector('.comments-loader');
let commentsCurrentCount = 0;
let currentElement = null;

const createCommentNode = (comment) => {
  const commentNode = commentTemplate.cloneNode(true);
  const commentAvatar = commentNode.querySelector('.social__picture');
  const commentMessage = commentNode.querySelector('.social__text');

  commentAvatar.src = comment.avatar;
  commentAvatar.alt = comment.name;
  commentMessage.textContent = comment.message;

  return commentNode;
};

const loadFewComments = (count = 5) => {
  const fragment = document.createDocumentFragment();
  const remainingComments = currentElement.comments.length - commentsCurrentCount;
  const commentsToLoad = Math.min(count, remainingComments);

  for (let i = commentsCurrentCount; i < commentsCurrentCount + commentsToLoad; i++) {
    const commentNode = createCommentNode(currentElement.comments[i]);
    fragment.appendChild(commentNode);
  }

  commentList.appendChild(fragment);
  commentsCurrentCount += commentsToLoad;

  if (commentsCurrentCount >= currentElement.comments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const handleLoadCommentsClick = (evt) => {
  evt.preventDefault();
  loadFewComments(5); // Загружаем по 5 комментариев за раз
};

const clearComments = () => {
  commentList.innerHTML = '';
  commentsCurrentCount = 0;
  commentsLoader.classList.remove('hidden');
};

const linkPostComments = (element) => {
  currentElement = element;
  clearComments();
  loadFewComments();
};

const linkPostImg = (element) => {
  const postImg = bigPictureNode.querySelector('.big-picture__img > img');
  const postCaption = bigPictureNode.querySelector('.social__caption');
  const postLikesCount = bigPictureNode.querySelector('.likes-count');

  postImg.src = element.url;
  postImg.alt = element.description;
  postCaption.textContent = element.description;
  postLikesCount.textContent = element.likes.toString();
};

const linkPostData = (element) => {
  linkPostImg(element);
  linkPostComments(element);
};

const handleCloseButton = () => {
  bigPictureCancel.addEventListener('click', (evt) => {
    evt.preventDefault();
    bigPictureNode.classList.add('hidden');
    document.body.classList.remove('modal-open');
    commentsCurrentCount = 0;
  });
};

export const openFullPhotoView = (element) => {
  document.body.classList.add('modal-open');
  bigPictureNode.classList.remove('hidden');
  commentsLoader.addEventListener('click', handleLoadCommentsClick);

  handleCloseButton();
  linkPostData(element);
};
