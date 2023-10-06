export interface IArticleAuthor {
  _id: string;
  username: string;
  discordId: string;
  blogname?: string;
  avatar: string;
}

export interface IArticleTag {
  name: string;
}

export interface IArticle {
  _id: string;
  publishedOn: string;
  title: string;
  content: string;
  titleSeo: string;
  descriptionSeo: string;
  keywordsSeo: string;
  slug: string;
  author: IArticleAuthor;
  tags: IArticleTag[];
}