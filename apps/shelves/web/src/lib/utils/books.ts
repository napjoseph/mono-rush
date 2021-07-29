import { Book } from '../../models';
import { Volume } from '../../models/vendor/google-apis/books';

const getPlaceholder = (book: Book): string => {
  const domain = 'https://via.placeholder.com';
  const width = 150;
  const height = 200;
  const format = 'png';
  const bgColor = '131313';
  const textColor = 'e1e1e1';
  const text = encodeURI(book.title || 'Book');

  return `${domain}/${width}x${height}.${format}/${bgColor}/${textColor}?text=${text}`;
};

export const getBookThumbnail = (book: Book): string => {
  const images = book.imageLinks;
  const placeholder = getPlaceholder(book);

  if (!images) return placeholder;

  if (images.thumbnail) return images.thumbnail;
  if (images.smallThumbnail) return images.smallThumbnail;
  if (images.small) return images.small;
  if (images.medium) return images.medium;
  if (images.large) return images.large;
  if (images.extraLarge) return images.extraLarge;

  return placeholder;
};

export const parseBook = (volume: Volume): Book => {
  return {
    id: volume.id,
    title: volume.volumeInfo.title,
    subtitle: volume.volumeInfo.subtitle,
    description: volume.volumeInfo.description,
    authors: volume.volumeInfo.authors,
    publisher: volume.volumeInfo.publisher,
    publishedDate: volume.volumeInfo.publishedDate,
    pageCount: volume.volumeInfo.pageCount,
    categories: volume.volumeInfo.categories,
    industryIdentifiers: volume.volumeInfo.industryIdentifiers,
    imageLinks: volume.volumeInfo.imageLinks,
    metaLinks: {
      apiDetailsLink: volume.selfLink,
      previewLink: volume.volumeInfo.previewLink,
      infoLink: volume.volumeInfo.infoLink,
      canonicalVolumeLink: volume.volumeInfo.canonicalVolumeLink
    }
  };
};
