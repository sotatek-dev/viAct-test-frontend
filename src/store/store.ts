import { action, Action, createStore, thunk, Thunk } from 'easy-peasy';
import { client } from '../api/config';
import { ApiRequestUrl, API_KEY } from '../api/constant';
import { onError, parseResult } from '../api/util';
import { News } from '../common/interface';

export interface GetNewsPaginationOptions {
  pageSize: number;
  page?: number;
  keyword?: string;
}

export interface NewsModel {
  news: News[];
  setListNews: Action<NewsModel, News[]>;
  isFetchingNews: Boolean;
  setIsFetchingNews: Action<NewsModel, Boolean>;
  getAllNews: Thunk<NewsModel, GetNewsPaginationOptions>;
}

export const stores = createStore<NewsModel>({
  news: [],
  isFetchingNews: false,
  setListNews: action((state, payload) => {
    state.news = payload;
  }),
  setIsFetchingNews: action((state, payload) => {
    state.isFetchingNews = payload;
  }),
  getAllNews: thunk(async (actions, payload) => {
    const {pageSize, page, keyword} = payload;
    actions.setIsFetchingNews(true);
    try {
      const result = await client({
        method: 'GET',
        url: `${ApiRequestUrl.EVERYTHING}`,
        params: {
          domains: 'wsj.com',
          apiKey: API_KEY,
          pageSize,
          page,
          q: keyword
        },
      });
      actions.setIsFetchingNews(false);
      actions.setListNews(parseResult(result).articles);
    } catch (error) {
      onError(error);
    }
  }),
});
