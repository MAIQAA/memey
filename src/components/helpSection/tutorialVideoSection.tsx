import { VideoCard } from "./videoCard";

// TutorialVideosSection Component
export const TutorialVideosSection: React.FC = () => {
  const videos = [
    {
      title: "MeMeY Login Tutorial",
      src: "https://www.youtube.com/embed/XX-QzrtxOac?feature=oembed",
    },
    {
      title: "MeMeY Data Import Tutorial",
      src: "https://www.youtube.com/embed/m2j1lmkSA3Q?feature=oembed",
    },
    {
      title: "MeMeY THE Pro Tip",
      src: "https://www.youtube.com/embed/Ia97htsVDZg?feature=oembed",
    },
  ];

  return (
    <div className="mt-12 sm:mt-16 animate-fade-in">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 text-center mb-8 sm:mb-12">
        Tutorial Videos (Soundless)
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <VideoCard key={index} title={video.title} src={video.src} />
        ))}
      </div>
    </div>
  );
};