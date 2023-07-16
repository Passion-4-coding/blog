export interface IArticle {
  _id: string;
  createdOn: string;
  updatedOn: string;
  publishedOn: string;
  language: 'en' | 'ua';
  title: string;
  content: string;
  titleCompact: string;
  contentCompact: string;
  titleSeo: string;
  descriptionSeo: string;
  keywordsSeo: string;
  slug: string;
  pending: boolean;
  active: boolean;
}