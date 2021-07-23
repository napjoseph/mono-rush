import { ArticleFrontMatter } from '../../models';

const DEFAULT_FRONT_MATTER: ArticleFrontMatter = {
  title: '',
  publishedDate: '',
  tags: [],
  description: '',
  disableComments: false
};

const parseFrontMatter = (matter: Partial<ArticleFrontMatter>): ArticleFrontMatter => {
  return {
    ...DEFAULT_FRONT_MATTER,
    ...matter
  };
};

export default parseFrontMatter;
