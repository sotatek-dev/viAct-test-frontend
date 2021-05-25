export interface News {
    source: NewsSource,
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string,
}

export interface NewsSource {
    id: string;
    name: string;   
}