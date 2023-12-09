const VideoComponent = ({
  src,
  autoplay,
  muted,
}: {
  src: string;
  autoplay?: boolean;
  muted?: boolean;
}) => {
  return (
    <div>
      <video
        className="aspect-video mx-auto"
        width="640"
        height="360"
        autoplay={autoplay}
        muted={muted}
        controls
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
