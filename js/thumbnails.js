
/*
  TEMPLATE

  <template id="picture">
    <a href="#" class="picture">
      <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
      <p class="picture__info">
        <span class="picture__comments"></span>
        <span class="picture__likes"></span>
      </p>
    </a>
  </template>


  CONTAINER

  <section class="pictures  container">

*/

const drawThumbnail = function(element, fragment, pictureTemplate) {
  const pictureNode = pictureTemplate.cloneNode(true);
  const img = pictureNode.querySelector('.picture__img');
  const likes = pictureNode.querySelector('.picture__likes');
  const comments = pictureNode.querySelector('.picture__comments');

  img.src = element.url;
  img.alt = element.description;
  likes.textContent = element.likes.toString();
  comments.textContent = element.comments.length.toString();

  fragment.appendChild(pictureNode);
};

export const drawThumbnails = function(arrayOfPosts) {

  const picturesContainer = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content;
  const fragment = document.createDocumentFragment();

  arrayOfPosts.forEach((element) => {
    drawThumbnail(element, fragment, pictureTemplate);
  });

  picturesContainer.append(fragment);

};

