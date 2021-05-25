import { useState } from 'react';
import './NewsList.scss';
import { useEffect } from 'react';
import { useStoreActions, useStoreState } from '../../store/hooks';
import { News } from '../../common/interface';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';

export interface IAppProps {}

const NewsList = () => {
  const getAllNews = useStoreActions((actions) => actions.getAllNews);
  const news = useStoreState((state) => state.news);
  const isFetchingNews = useStoreState((state) => state.isFetchingNews);
  const [displayNews, setDisplayNews] = useState<any>();

  useEffect(() => {
    getAllNews({ pageSize: 10, page: 1 });
  }, []);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString();
  }

  useEffect(() => {
    setDisplayNews(
      news.map((item, index) => ({
        id: index,
        author: item.author,
        content: item.content,
        description: item.description,
        publishedAt: formatDate(item.publishedAt),
        source: item.source.name,
        title: item.title,
        url: item.url,
        urlToImage: item.urlToImage,
      }))
    );
  }, [news]);

  return (
    <div className="newsList">
      <Header/>
      <div style={{ width: '100%' }}>
        {displayNews && (
          <Table
            data={displayNews}
            onPaginationChange={(data) =>
              getAllNews({ pageSize: 10, page: data.page + 1 })
            }
            loading={isFetchingNews}
          />
        )}
      </div>
    </div>
  );
};

export default NewsList;
