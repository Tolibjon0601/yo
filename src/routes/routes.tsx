import { Routes, Route } from 'react-router-dom';
import HomePage from '../home';
import SinglePage from '../singlePage';
import SearchResults from './../search/index';

interface SwitchProps {
  selectedCategory: string;
  videos: any[];
}

const SwitchRoutes: React.FC<SwitchProps> = ({ selectedCategory, videos }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage selectedCategory={selectedCategory} videos={videos} />} />
      <Route path="/search/:id" element={<SearchResults />} />
      <Route path="/video/:id" element={<SinglePage />} />
    </Routes>
  );
};

export default SwitchRoutes;
