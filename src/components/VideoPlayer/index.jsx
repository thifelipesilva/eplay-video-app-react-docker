

const VideoPlayer = ({ width, height, src, title }) => {
  return (
    <iframe
      width={width}
      height={height}
      src={src}
      title={title}
      frameborder="0"
      allowFullScreen
      
    />
  );
};

export default VideoPlayer;