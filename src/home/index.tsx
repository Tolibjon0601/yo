import { Link } from 'react-router-dom';

interface VideoSnippet {
  title: string;
  channelTitle: string;
  thumbnails: {
    medium?: { url: string };
    default?: { url: string };
  };
}

interface VideoItem {
  id: {
    videoId: string;
  };
  snippet: VideoSnippet;
}

interface VideosProps {
  videos: VideoItem[];
}

const Videos: React.FC<VideosProps> = ({ videos }) => {
  return (
    <div className="grid p-2 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {videos.map((video) => (
        <Link to={`/video/${video.id.videoId}`} key={video.id.videoId}>
          <div className="flex flex-col gap-1">
            <img
              className="rounded-xl"
              src={video.snippet.thumbnails?.medium?.url || video.snippet.thumbnails?.default?.url}
              alt={video.snippet.title}
            />
            <div className="flex justify-start gap-2 p-2">
              <img
                className="w-[30px] h-[30px] rounded-full"
                src={video.snippet.thumbnails?.medium?.url || video.snippet.thumbnails?.default?.url}
                alt={video.snippet.channelTitle}
              />
              <div className="flex flex-col gap-2">
                <p>{video.snippet.title.slice(0, 50)}</p>
                <p>{video.snippet.channelTitle}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Videos;
