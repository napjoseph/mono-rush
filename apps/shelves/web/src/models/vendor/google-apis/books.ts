// For a full list of fields from Google Books API's Volume Resource, check out:
// https://developers.google.com/books/docs/v1/reference/volumes#resource-representations

export interface Volumes {
  kind?: 'books#volumes';
  totalItems?: number;
  items?: Volume[];
}

export interface Volume {
  kind?: 'books#volume';
  id?: string;
  etag?: string;
  selfLink?: string;
  volumeInfo?: VolumeInfo;
  userInfo?: UserInfo;
  saleInfo?: SaleInfo;
  accessInfo?: AccessInfo;
  searchInfo?: SearchInfo;
}

export interface VolumeInfo {
  title?: string;
  subtitle?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  industryIdentifiers?: IndustryIdentifier[];
  pageCount?: number; // originally integer
  dimensions?: Dimensions;
  printType?: string;
  mainCategory?: string;
  categories?: string[];
  averageRating?: number; // originally double
  ratingsCount?: number; // originally integer
  contentVersion?: string;
  imageLinks?: ImageLinks;
  language?: string;
  previewLink?: string;
  infoLink?: string;
  canonicalVolumeLink?: string;
}

export interface IndustryIdentifier {
  type?: string;
  identifier?: string;
}

export interface Dimensions {
  height?: string;
  width?: string;
  thickness?: string;
}

export interface ImageLinks {
  smallThumbnail?: string;
  thumbnail?: string;
  small?: string;
  medium?: string;
  large?: string;
  extraLarge?: string;
}

// NOTE: We used `any` here since we'll not be using the user libraries.
export interface UserInfo {
  review?: any; // originally mylibrary.reviews Resource
  readingPosition?: any; // originally mylibrary.readingpositions Resource
  isPurchased?: boolean;
  isPreordered?: boolean;
  updated?: string; // originally datetime
}

export interface SaleInfo {
  country?: string;
  saleability?: string;
  onSaleDate?: string; // originally datetime
  isEbook?: boolean;
  listPrice?: {
    amount?: number; // originally double
    currencyCode?: string;
  };
  retailPrice?: {
    amount?: number; // originally double
    currencyCode?: string;
  };
  buyLink?: string;
}

export interface AccessInfo {
  country?: string;
  viewability?: string;
  embeddable?: boolean;
  publicDomain?: boolean;
  textToSpeechPermission?: string;
  epub?: {
    isAvailable?: boolean;
    downloadLink?: string;
    acsTokenLink?: string;
  };
  pdf?: {
    isAvailable?: boolean;
    downloadLink?: string;
    acsTokenLink?: string;
  };
  webReaderLink?: string;
  accessViewStatus?: string;
  downloadAccess?: {
    kind?: 'books#downloadAccessRestriction';
    volumeId?: string;
    restricted?: boolean;
    deviceAllowed?: boolean;
    justAcquired?: boolean;
    maxDownloadDevices?: number; // originally integer
    downloadsAcquired?: number; // originally integer
    nonce?: string;
    source?: string;
    reasonCode?: string;
    message?: string;
    signature?: string;
  };
}

export interface SearchInfo {
  textSnippet?: string;
}
