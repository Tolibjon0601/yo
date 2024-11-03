import React from 'react';
import Videos from "../home";

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

interface NavbarProps {
  selectedCategory: string;
  videos: VideoItem[];
}

const Navbar: React.FC<NavbarProps> = ({ selectedCategory, videos }) => {
  return (
    <>
      <div className="text-[35px] font-bold flex gap-2">
        <h1 className="text-[red]">{selectedCategory}</h1>
        <h1 className="text-white">videos</h1>
      </div>
      <Videos videos={videos} />
    </>
  );
};

export default Navbar;
