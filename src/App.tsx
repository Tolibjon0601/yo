import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/main-layout';
import { ApiService } from './services/api';
import Navbar from './navbar/index';
import Category from './category/index';
import HomePage from './home';
import SinglePage from './singlePage';
import SearchResults from './search/index';
import ChannelPage from './channelPage/channel';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('New');
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`);
        setVideos(data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    fetchVideos();
  }, [selectedCategory]);

  return (
    <BrowserRouter>
      <MainLayout>
        <Category selectedCategoryHandler={setSelectedCategory} />
        <Navbar selectedCategory={selectedCategory} videos={videos} />
        <Routes>
          <Route path="/" element={<HomePage selectedCategory={selectedCategory} videos={videos} />} />
          <Route path="/search/:id" element={<SearchResults videos={videos} />} />
          <Route path="/video/:id" element={<SinglePage />} />
          <Route path="/channel" element={<ChannelPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
