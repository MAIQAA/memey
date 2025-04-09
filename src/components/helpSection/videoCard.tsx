import { FaPlay } from "react-icons/fa6";

// VideoCard Component
interface VideoCardProps {
  title: string;
  src: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({ title, src }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <iframe
        title={title}
        width="100%"
        height="200"
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <FaPlay className="text-white w-10 h-10 opacity-70 hover:opacity-100 transition-opacity duration-300" />
        <p className="absolute bottom-4 left-0 right-0 text-white text-center text-sm sm:text-base font-medium px-4">
          {title}
        </p>
      </div>
    </div>
  );
};