import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from "./layouts/main-layout";
import SwitchRoutes from './routes/routes';
import { ApiService } from './services/api';
import Category from './category/index';
import Navbar from './navbar/index';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("New");
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`);
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, [selectedCategory]);

  return (
    <BrowserRouter>
      <MainLayout>
        <Navbar selectedCategory={selectedCategory} videos={videos} />
        <Category selectedCategoryHandler={setSelectedCategory} />
        <SwitchRoutes selectedCategory={selectedCategory} videos={videos} />
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
