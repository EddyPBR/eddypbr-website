type ArticleOgg = {
  publishedAt: string;
  modifiedAt: string;
  tagContent: string[];
}

type SEOType = {
  title: string;
  description: string;
  url: string;
  urlImage: string;
  type: "website" | "article";
  articleOgg?: ArticleOgg;
}

import { theme } from "../../global/theme";

export function SEO({ title, description, url, urlImage, type, articleOgg }: SEOType) {
  return(
    <>
      <link rel="canonical" href={url} />
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="theme-color" content={theme.colors.primary} />
      <meta name="description" content={description} />
      <meta property="og:site_name" content="EddyPBR website" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={urlImage} />
      <meta property="article:publisher" content="https://www.facebook.com/eddypbr/" />
      {
        articleOgg && 
          <>
            <meta property="article:published_time" content={articleOgg.publishedAt} />
            <meta property="article:modified_time" content={articleOgg.modifiedAt} />
            {
              articleOgg.tagContent.map((tag) => <meta property="article:tag" content={tag} key={tag} />)
            }
          </>
      }
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={urlImage} />
      <meta name="twitter:site" content="@eddypbr" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <title>{title}</title>
    </>
  );
}
