import { videos } from "./data.js";

const TiktokListItems = () => {
  const listItem = videos.map((video) => {
    return <li key={video.id}>{video.name}</li>;
  });

  return <ol>{listItem}</ol>;
};

export default TiktokListItems;
