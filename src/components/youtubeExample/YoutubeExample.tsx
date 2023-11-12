
// import React, { FC, useState, useEffect } from "react";
// import VideoForm from "./VideoForm";
// import styles from "./YoutubeExample.module.css";
// import { useAppSelector } from "../../app/hooks";
// import { Navigate } from "react-router-dom";
// import videoLinks from "./links.json";

// interface Video {
//   id: number;
//   url: string;
// }

// const YoutubeExample: FC = () => {
//   const { user } = useAppSelector((state) => state.auth);
//   const [videos, setVideos] = useState<Video[]>(videoLinks);

//   const handleAddVideo = (newVideoUrl: string) => {
//     const newVideo: Video = { id: videos.length + 1, url: newVideoUrl };
//     setVideos((prevVideos) => {
//       const updatedVideos = [...prevVideos, newVideo];
//       try {
//         localStorage.setItem("videos", JSON.stringify(updatedVideos));
//       } catch (error) {
//         console.error("Error ", error);
//       }
//       return updatedVideos;
//     });
//   };

//   const handleRemoveVideo = () => {
//     setVideos((prevVideos) => {
//       const updatedVideos = [...prevVideos];
//       updatedVideos.pop(); // Удаляем последнее видео
//       try {
//         localStorage.setItem("videos", JSON.stringify(updatedVideos));
//       } catch (error) {
//         console.error("Error ", error);
//       }
//       return updatedVideos;
//     });
//   };

//   useEffect(() => {
//     try {
//       const storedVideos = localStorage.getItem("videos");
//       if (storedVideos) {
//         const parsedVideos = JSON.parse(storedVideos);
//         if (Array.isArray(parsedVideos)) {
//           setVideos(parsedVideos);
//         } else {
//           console.error("Invalid data");
//         }
//       }
//     } catch (error) {
//       console.error("Error :", error);
//     }
//   }, []);

//   if (!user) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <div>
//       <VideoForm onAddVideo={handleAddVideo} onRemoveVideo={handleRemoveVideo} />
//       <div className={styles.videoList}>
//         {videos.map((video) => (
//           <div key={video.id} className={styles.videoCard}>
//             <div className={styles.videoContainer}>
//               <iframe
//                 title={`YouTube Video ${video.id}`}
//                 width="560"
//                 height="315"
//                 src={video.url}
//                 allow="autoplay; fullscreen; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default YoutubeExample;



import React, { FC, useState, useEffect } from "react";
import VideoForm from "./VideoForm";
import styles from "./YoutubeExample.module.css";
import { useAppSelector } from "../../app/hooks";
import { Navigate } from "react-router-dom";
import videoLinks from "./links.json";


const YoutubeExample: FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [videos, setVideos] = useState<Video[]>(videoLinks);

  const handleAddVideo = (newVideoUrl: string) => {
    const newVideo: Video = { id: videos.length + 1, url: newVideoUrl };
    setVideos((prevVideos) => {
      const updatedVideos = [...prevVideos, newVideo];
      try {
        localStorage.setItem("videos", JSON.stringify(updatedVideos));
      } catch (error) {
        console.error("Error ", error);
      }
      return updatedVideos;
    });
  };

  const handleRemoveVideo = (id: number) => {
    setVideos((prevVideos) => {
      const updatedVideos = prevVideos.filter((video) => video.id !== id);
      try {
        localStorage.setItem("videos", JSON.stringify(updatedVideos));
      } catch (error) {
        console.error("Error ", error);
      }
      return updatedVideos;
    });
  };

  useEffect(() => {
    try {
      const storedVideos = localStorage.getItem("videos");
      if (storedVideos) {
        const parsedVideos = JSON.parse(storedVideos);
        if (Array.isArray(parsedVideos)) {
          setVideos(parsedVideos);
        } else {
          console.error("Invalid data");
        }
      }
    } catch (error) {
      console.error("Error :", error);
    }
  }, []);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <VideoForm onAddVideo={handleAddVideo} onRemoveVideo={handleRemoveVideo} />
      <div className={styles.videoList}>
        {videos.map((video) => (
          <div key={video.id} className={styles.videoCard}>
            <div className={styles.videoContainer}>
              <iframe
                title={`YouTube Video ${video.id}`}
                width="560"
                height="315"
                src={video.url}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.videoControls}>
            <button type="button" onClick={() => handleRemoveVideo(video.id)}>
                 Delete video
                </button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeExample;



