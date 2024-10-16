// /* eslint-disable react/prop-types */
// import { useEffect, useState } from 'react';

// const Album = () => {
//   const [albumData, setAlbumData] = useState([]);
//   const [albumCardOpen, setAlbumCardOpen] = useState(false);
//   const [currentAlbum, setCurrentAlbum] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/photos');
//         const data = await res.json();
//         // console.log(data);
//         // albumId , id , thumbnailUrl , title , url
//         if (data) {
//           setAlbumData(data);
//         }
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     fetchData();
//   }, []);

//   let albumCards = 100;
//   return (
//     <>
//       {!albumCardOpen ? (
//         <div style={{ display: 'flex', flexWrap: 'wrap', padding: '1rem' }}>
//           {Array.from({ length: albumCards }, (_, index) => {
//             return (
//               <AlbumCard
//                 key={index}
//                 albumNum={index}
//                 albumData={albumData}
//                 albumCardOpen={albumCardOpen}
//                 setAlbumCardOpen={setAlbumCardOpen}
//                 setCurrentAlbum={setCurrentAlbum}
//               />
//             );
//           })}
//         </div>
//       ) : (
//         <AlbumImages
//           setAlbumCardOpen={setAlbumCardOpen}
//           albumData={albumData}
//           currentAlbum={currentAlbum}
//         />
//       )}
//     </>
//   );
// };

// const AlbumCard = ({ albumNum, setAlbumCardOpen, setCurrentAlbum }) => {
//   function handleClick() {
//     setAlbumCardOpen(true);
//     setCurrentAlbum(albumNum);
//   }

//   return (
//     <>
//       <div
//         style={{
//           border: '1px solid black',
//           width: '200px',
//           height: '200px',
//           textAlign: 'center'
//         }}
//         onClick={() => {
//           handleClick();
//         }}
//       >
//         <p>Alumb {albumNum + 1}</p>
//       </div>
//     </>
//   );
// };

// const AlbumImages = ({ setAlbumCardOpen, albumData, currentAlbum }) => {
//   const [modalImageOpen, setModalImageOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const currentAlbumData = albumData.filter(
//     (album) => album.albumId === currentAlbum
//   );
//   console.log(currentAlbumData);

//   const handleModalClick = (imageUrl) => {
//     setModalImageOpen(true);
//     setSelectedImage(imageUrl);
//   };

//   return (
//     <>
//       <div style={{}}>
//         <button
//           onClick={() => {
//             setAlbumCardOpen(false);
//           }}
//         >
//           Go back
//         </button>
//         <div style={{ display: 'flex', flexWrap: 'wrap', padding: '1rem' }}>
//           {currentAlbumData.map((album) => {
//             return (
//               <div
//                 key={album.id}
//                 style={{
//                   border: '1px solid black',
//                   padding: '1rem',
//                   width: '200px',
//                   height: '200px',
//                   textAlign: 'center'
//                 }}
//                 onClick={() => handleModalClick(album.url)}
//               >
//                 <p>{album.id}</p>
//                 <img
//                   style={{ width: '100%', height: '90%' }}
//                   src={album.thumbnailUrl}
//                   alt='album-img'
//                 />
//               </div>
//             );
//           })}
//         </div>
//         {modalImageOpen && (
//           <ImageModal
//             setModalImageOpen={setModalImageOpen}
//             imageUrl={selectedImage} // pass the selected image URL
//           />
//         )}
//       </div>
//     </>
//   );
// };

// const ImageModal = ({ setModalImageOpen, imageUrl }) => {
//   return (
//     <>
//       <div
//         style={{
//           zIndex: 1,
//           backgroundColor: 'rgba(0,0,0,0.8)',
//           width: '100%',
//           height: '100vh',
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: 'white',
//             padding: '20px',
//             borderRadius: '10px',
//             textAlign: 'center'
//           }}
//         >
//           <button onClick={() => setModalImageOpen(false)}>Close</button>
//           <h3>Image</h3>
//           <img
//             src={imageUrl}
//             alt='Selected'
//             style={{ maxWidth: '100%', maxHeight: '80vh' }}
//           />
//         </div>
//       </div>
//     </>
//   );
// };
// export default Album;

import { useEffect, useState } from 'react';

const Album = () => {
  const [albumData, setAlbumData] = useState({});
  const [albumCardOpen, setAlbumCardOpen] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await res.json();

        // Group data by albumId
        const groupedData = data.reduce((acc, photo) => {
          const { albumId } = photo;
          if (!acc[albumId]) {
            acc[albumId] = [];
          }
          acc[albumId].push(photo);
          return acc;
        }, {});

        if (groupedData) {
          setAlbumData(groupedData);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading albums...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Get the list of albumIds from the grouped data
  const albumIds = Object.keys(albumData);

  return (
    <>
      {!albumCardOpen ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '1rem' }}>
          {albumIds.map((albumId) => (
            <AlbumCard
              key={albumId}
              albumId={albumId}
              albumData={albumData}
              setAlbumCardOpen={setAlbumCardOpen}
              setCurrentAlbum={setCurrentAlbum}
            />
          ))}
        </div>
      ) : (
        <AlbumImages
          setAlbumCardOpen={setAlbumCardOpen}
          albumData={albumData}
          currentAlbum={currentAlbum}
        />
      )}
    </>
  );
};

const AlbumCard = ({ albumId, setAlbumCardOpen, setCurrentAlbum }) => {
  function handleClick() {
    setAlbumCardOpen(true);
    setCurrentAlbum(albumId);
  }

  return (
    <div
      style={{
        border: '1px solid black',
        width: '200px',
        height: '200px',
        textAlign: 'center',
        margin: '10px'
      }}
      onClick={handleClick}
    >
      <p>Album {albumId}</p>
    </div>
  );
};

const AlbumImages = ({ setAlbumCardOpen, albumData, currentAlbum }) => {
  const [modalImageOpen, setModalImageOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const currentAlbumData = albumData[currentAlbum] || [];

  const handleModalClick = (imageUrl) => {
    setModalImageOpen(true);
    setSelectedImage(imageUrl);
  };

  return (
    <>
      <div>
        <button onClick={() => setAlbumCardOpen(false)}>Go back</button>
        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '1rem' }}>
          {currentAlbumData.map((album) => (
            <div
              key={album.id}
              style={{
                border: '1px solid black',
                padding: '1rem',
                width: '200px',
                height: '200px',
                textAlign: 'center',
                margin: '10px'
              }}
              onClick={() => handleModalClick(album.url)}
            >
              <p>{album.id}</p>
              <img
                style={{ width: '100%', height: '90%' }}
                src={album.thumbnailUrl}
                alt='album-img'
              />
            </div>
          ))}
        </div>
        {modalImageOpen && (
          <ImageModal
            setModalImageOpen={setModalImageOpen}
            imageUrl={selectedImage} // pass the selected image URL
          />
        )}
      </div>
    </>
  );
};

const ImageModal = ({ setModalImageOpen, imageUrl }) => {
  return (
    <>
      <div
        style={{
          zIndex: 1,
          backgroundColor: 'rgba(0,0,0,0.8)',
          width: '100%',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center'
          }}
        >
          <button onClick={() => setModalImageOpen(false)}>Close</button>
          <h3>Image</h3>
          <img
            src={imageUrl}
            alt='Selected'
            style={{ maxWidth: '100%', maxHeight: '80vh' }}
          />
        </div>
      </div>
    </>
  );
};

export default Album;
