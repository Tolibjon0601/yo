import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ApiService } from '../services/api';

// Define interfaces for video data
interface Snippet {
  title: string;
  description: string;
  thumbnails: {
    high: { url: string };
    default: { url: string };
  };
  channelTitle: string;
  publishedAt: string;
}

interface Statistics {
  viewCount: string;
  likeCount: string;
  commentCount: string;
}

interface ContentDetails {
  duration: string;
}

interface Video {
  snippet: Snippet;
  statistics: Statistics;
  contentDetails: ContentDetails;
}

function SinglePage() {
  const { id } = useParams<{ id: string }>();
  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`videos?part=snippet,statistics,contentDetails&id=${id}`);
        setVideo(data.items[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  if (!video) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  const { snippet, statistics, contentDetails } = video;
  const { title, description, thumbnails, channelTitle, publishedAt } = snippet;
  const { viewCount, likeCount, commentCount } = statistics;

  const formattedDate = new Date(publishedAt).toLocaleDateString();
  const duration = contentDetails?.duration.replace('PT', '').replace('H', 'h ').replace('M', 'm ').replace('S', 's');

  return (
    <div className="text-white p-4 md:px-10 max-w-[1200px] mx-auto">
      <div className="w-full mb-4">
        <img src={thumbnails?.high?.url} alt={title} className="w-full rounded-lg" />
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <div className="flex gap-4 text-gray-400 mb-2">
            <span>{parseInt(viewCount).toLocaleString()} views</span>
            <span>{formattedDate}</span>
            <span>Duration: {duration || 'N/A'}</span>
          </div>
          <div className="flex gap-6 items-center mb-4">
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-red-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9l-5 5m0 0l-5-5m5 5V3" />
              </svg>
              {likeCount} Likes
            </span>
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m-4 4h4" />
              </svg>
              {commentCount} Comments
            </span>
          </div>

          <div className="flex gap-4 items-center mb-6">
            <img
              src={thumbnails?.default?.url}
              alt={channelTitle}
              className="w-[50px] h-[50px] rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-bold">{channelTitle}</span>
              <span className="text-gray-400">Published on {formattedDate}</span>
            </div>
          </div>
        </div>


        <div className="flex-1 lg:max-w-[500px] bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-300">{description.slice(0, 100)}</p>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
