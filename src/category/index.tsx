import { useNavigate } from 'react-router-dom';
import { category } from './const';

interface CategoryProps {
  selectedCategoryHandler: (categoryName: string) => void;
}

const Category: React.FC<CategoryProps> = ({ selectedCategoryHandler }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    selectedCategoryHandler(categoryName);
    navigate('/');
  };

  return (
    <div className="flex gap-2 justify-center p-2 overflow-x-auto scrollbar-hidden">
      {category.map((item: CategoryType) => (
        <button
          key={item.name}
          onClick={() => handleCategoryClick(item.name)}
          type="button"
          className="flex items-center gap-1 text-white bg-[#383636] font-medium rounded-lg text-sm px-7 py-2.5 text-center me-2 mb-2 bg-red-400"
        >
          {item.icon}
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Category;
