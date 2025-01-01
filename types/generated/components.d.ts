import type { Schema, Struct } from '@strapi/strapi';

export interface ArticlesArticle extends Struct.ComponentSchema {
  collectionName: 'components_articles_articles';
  info: {
    description: '';
    displayName: 'article';
  };
  attributes: {
    author: Schema.Attribute.Component<'author.author', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    publishedDate: Schema.Attribute.Date;
    type: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AuthorAuthor extends Struct.ComponentSchema {
  collectionName: 'components_author_authors';
  info: {
    displayName: 'author';
  };
  attributes: {
    avatar: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    jobTitle: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MediaImage extends Struct.ComponentSchema {
  collectionName: 'components_media_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface TextHeading extends Struct.ComponentSchema {
  collectionName: 'components_text_headings';
  info: {
    description: '';
    displayName: 'heading';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TextLink extends Struct.ComponentSchema {
  collectionName: 'components_text_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    linkAnchor: Schema.Attribute.String;
    linkName: Schema.Attribute.String;
  };
}

export interface TextLists extends Struct.ComponentSchema {
  collectionName: 'components_text_lists';
  info: {
    displayName: 'lists';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface TextParagraph extends Struct.ComponentSchema {
  collectionName: 'components_text_paragraphs';
  info: {
    displayName: 'paragraph';
  };
  attributes: {
    paragraph: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface TextRichText extends Struct.ComponentSchema {
  collectionName: 'components_text_rich_texts';
  info: {
    displayName: 'richText';
  };
  attributes: {
    richText: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'articles.article': ArticlesArticle;
      'author.author': AuthorAuthor;
      'media.image': MediaImage;
      'text.heading': TextHeading;
      'text.link': TextLink;
      'text.lists': TextLists;
      'text.paragraph': TextParagraph;
      'text.rich-text': TextRichText;
    }
  }
}
