const linkPost = function(bigPictureNode, element) {
  const postImg = bigPictureNode.querySelector('.big-picture__img > img');
  const postCaption = bigPictureNode.querySelector('.social__caption');
  const postLikesCount = bigPictureNode.querySelector('.likes-count');
  document.body.classList.add('modal-open');

  postImg.src = element.url;
  postCaption.textContent = element.description;
  postLikesCount.textContent = element.likes.toString();


  const commentList = bigPictureNode.querySelector('.social__comments');
  const fragment = document.createDocumentFragment();
  const commentTemplate = document.querySelector('#comment').content;

  element.comments.forEach((comment) => {
    const commentNode = commentTemplate.cloneNode(true);
    const commentAvatar = commentNode.querySelector('img');
    const commentMessage = commentNode.querySelector('p');
    commentAvatar.src = comment.avatar;
    commentMessage.textContent = comment.message;
    fragment.appendChild(commentNode);
  });

  commentList.innerHTML = '';
  commentList.appendChild(fragment);

};

export const openFullPhotoView = function(element) {

  const bigPictureNode = document.querySelector('.big-picture');
  const bigPictureCancel = document.querySelector('.big-picture__cancel');

  bigPictureCancel.addEventListener('click', (evt) => {
    evt.preventDefault();
    bigPictureNode.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });

  bigPictureNode.classList.remove('hidden');

  linkPost(bigPictureNode, element);

  // eslint-disable-next-line no-console
  console.log(element);

};


