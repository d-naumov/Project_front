
// import React, { FC, useState } from "react";
// import styles from "./YoutubeExample.module.css";

// interface VideoFormProps {
//   onAddVideo: (videoUrl: string) => void;
//   onRemoveVideo: () => void;
// }

// const VideoForm: FC<VideoFormProps> = ({ onAddVideo, onRemoveVideo }) => {
//   const [videoUrl, setVideoUrl] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (videoUrl.trim() !== "") {
//       onAddVideo(videoUrl);
//       setVideoUrl("");
//     }
//   };

//   return (
//     <form className={styles.videoForm} onSubmit={handleSubmit}>
//       <label>
//         Добавить новое видео:
//         <input
//           placeholder="URL видео"
//           type="text"
//           value={videoUrl}
//           onChange={(e) => setVideoUrl(e.target.value)}
//         />
//       </label>
//       <button type="submit">Добавить</button>
//       <button type="button" onClick={onRemoveVideo}>
//         Удалить последнее видео
//       </button>
//     </form>
//   );
// };

// export default VideoForm;

// VideoForm.tsx

import React, { FC, useState } from "react";
import styles from "./YoutubeExample.module.css";

interface VideoFormProps {
  onAddVideo: (videoUrl: string) => void;
  onRemoveVideo: (id: number) => void;
}

const VideoForm: FC<VideoFormProps> = ({ onAddVideo, onRemoveVideo }) => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (videoUrl.trim() !== "") {
      onAddVideo(videoUrl);
      setVideoUrl("");
    }
  };

  return (
    <form className={styles.videoForm} onSubmit={handleSubmit}>
      <label>
       Add new video:
        <input
          placeholder="URL video"
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default VideoForm;
