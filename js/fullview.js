const bigPictureNode = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

const linkComment = function(commentTemplate, comment, fragment) {
  const commentNode = commentTemplate.cloneNode(true);
  const commentAvatar = commentNode.querySelector('img');
  const commentMessage = commentNode.querySelector('p');
  commentAvatar.src = comment.avatar;
  commentMessage.textContent = comment.message;
  fragment.appendChild(commentNode);
};

const linkPostComments = function(element) {
  const commentList = bigPictureNode.querySelector('.social__comments');
  const fragment = document.createDocumentFragment();
  const commentTemplate = document.querySelector('#comment').content;

  element.comments.forEach((comment) => {
    linkComment(commentTemplate, comment, fragment);
  });

  commentList.innerHTML = '';
  commentList.appendChild(fragment);
};

const linkPostImg = function(element) {
  const postImg = bigPictureNode.querySelector('.big-picture__img > img');
  const postCaption = bigPictureNode.querySelector('.social__caption');
  const postLikesCount = bigPictureNode.querySelector('.likes-count');
  postImg.src = element.url;
  postCaption.textContent = element.description;
  postLikesCount.textContent = element.likes.toString();
};

const linkPostData = function(element) {
  linkPostImg(element);
  linkPostComments(element);
};

const handleCloseButton = function() {
  bigPictureCancel.addEventListener('click', (evt) => {
    evt.preventDefault();
    bigPictureNode.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });
};

export const openFullPhotoView = function(element) {
  document.body.classList.add('modal-open');
  bigPictureNode.classList.remove('hidden');

  handleCloseButton();
  linkPostData(element);
};


