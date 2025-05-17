import {generateArrayOfPosts} from './util.js';
import { drawThumbnails } from './thumbnails.js';

const arrayOfPosts = generateArrayOfPosts();
// eslint-disable-next-line no-console
console.log(arrayOfPosts);


drawThumbnails(arrayOfPosts);


