// For a full list of fields from Google Books API's Volume Resource, check out:
// https://developers.google.com/books/docs/v1/reference/volumes#resource-representations

export interface Book {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  pageCount?: number;
  categories?: string[];
  industryIdentifiers?: BookIndustryIdentifier[];
  imageLinks?: BookImageLinks;
  metaLinks?: BookMetaLinks;
}

export interface BookIndustryIdentifier {
  type?: string;
  identifier?: string;
}

export interface BookMetaLinks {
  apiDetailsLink?: string;
  previewLink?: string;
  infoLink?: string;
  canonicalVolumeLink?: string;
}

export interface BookImageLinks {
  smallThumbnail?: string;
  thumbnail?: string;
  small?: string;
  medium?: string;
  large?: string;
  extraLarge?: string;
}
