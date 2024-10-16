// import { useEffect, useState } from 'react';
// import './style.css';
// export default function ImageSlider({ url, limit = 5, page = 1 }) {
//   const [data, setData] = useState([]);
//   const [pics, setPics] = useState([]);
//   const [currentPic, setCurrentPic] = useState(0);

import { useEffect, useState } from 'react';
import './style.css';

//   useEffect(() => {
//     if (url !== '') {
//       getData();
//       preLoadImages();
//     }
//   }, []);

//   //   const fetchUrl = async () => {
//   //     const response = await fetch(`${url}?page${page}&limit${limit}`);
//   //     const data = await response.json();
//   //     console.log(data);
//   //     return data;
//   //   };
//   //   fetchUrl();
//   function getData(urlLink) {
//     fetch(`${url}?page=${page}&limit=${limit}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         setPics(data.map((picUrl) => picUrl.download_url));
//       });
//     console.log('run');
//   }

//   function preLoadImages() {
//     pics.forEach((picUrl) => {
//       const img = new Image();
//       img.src = picUrl;
//     });
//   }

//   function rightArrow() {
//     if (currentPic === pics.length - 1) {
//       setCurrentPic(0);
//     }
//     setCurrentPic((prevSlide) => prevSlide + 1);
//   }
//   function leftArroww() {
//     if (currentPic === 0) {
//       setCurrentPic(pics.length - 1);
//     }
//     setCurrentPic((prevSlide) => prevSlide - 1);
//   }
//   return (
//     <>
//       {/* {pics?.map((picUrl, index) => {
//         return (
//           <div key={index}>
//             <img src={picUrl} alt={index} />
//           </div>
//         );
//       })} */}
//       <div className='container'>
//         <div className='btns'>
//           <p onClick={() => leftArroww()}>&larr;</p>
//           <p onClick={() => rightArrow()}>&rarr;</p>
//         </div>
//         {pics.length > 0 && (
//           <img
//             key={currentPic}
//             src={pics[currentPic]}
//             alt={`Image ${currentPic}`}
//           />
//         )}
//         {/* <img key={''} src={'https://picsum.photos/id/0/5000/3333'} alt={`dd`} /> */}
//       </div>
//     </>
//   );
//   // return (
//   //   <>
//   //     {pics?.map((picUrl, index) => (
//   //       <img key={index} src={picUrl} alt={`Image ${index}`} />
//   //     ))}
//   //   </>
//   // );
// }

// ->>>>>>>>>>>>>>>>>>>-<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

// export default function ImageSlider({ url, limit = 5, page = 1 }) {
//   const [images, setImages] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (url !== '') fetchImages(url);
//   }, [url]);

//   async function fetchImages(getUrl) {
//     try {
//       setLoading(true);
//       const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
//       const data = await res.json();

//       if (data) {
//         setImages(data);
//         setLoading(false);
//       }
//     } catch (e) {
//       setErrorMsg(e.message);
//       setLoading(false);
//     }
//   }

//   function rightArrow() {
//     if (currentSlide === images.length - 1) {
//       setCurrentSlide(0);
//     } else setCurrentSlide((prevSlide) => prevSlide + 1);
//   }
//   function leftArroww() {
//     if (currentSlide === 0) {
//       setCurrentSlide(images.length - 1);
//     } else setCurrentSlide((prevSlide) => prevSlide - 1);
//   }

//   console.log(images);

//   if (loading) {
//     return <div>Loading data please wait</div>;
//   }
//   if (errorMsg !== null) {
//     return <div>Error occured! {errorMsg}</div>;
//   }

//   return (
//     <div className='container '>
//       <p className='arrow arrow-left' onClick={() => leftArroww()}>
//         &larr;
//       </p>
//       {images && images.length
//         ? images.map((imageItem, index) => (
//             <img
//               key={imageItem.id}
//               src={imageItem.download_url}
//               alt={imageItem.download_url}
//               className={
//                 currentSlide === index ? 'current-image ' : 'hide-current-image'
//               }
//             />
//           ))
//         : null}
//       <p className='arrow arrow-right' onClick={() => rightArrow()}>
//         &rarr;
//       </p>
//       <span className='circle-indicators'>
//         {images && images.length
//           ? images.map((_, index) => (
//               <button
//                 key={index}
//                 className={
//                   currentSlide === index
//                     ? 'current-indicator'
//                     : 'current-indicator inactive-indicator'
//                 }
//                 onClick={() => setCurrentSlide(index)}
//               ></button>
//             ))
//           : null}
//       </span>
//     </div>
//   );
// }

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true); // Set loading to true initially

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${url}?page=${page}&limit=${limit}`);
        const data = await res.json();

        if (data) {
          setImages(data);
          setLoading(false);
        }
      } catch (e) {
        setErrorMsg(e.message);
        setLoading(false);
      }
    }

    fetchData(); // Load images when component mounts
  }, [url, limit, page]);

  function rightArrow() {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0);
    } else setCurrentSlide((prevSlide) => prevSlide + 1);
  }

  function leftArrow() {
    if (currentSlide === 0) {
      setCurrentSlide(images.length - 1);
    } else setCurrentSlide((prevSlide) => prevSlide - 1);
  }

  if (loading) {
    return <div>Loading data, please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occurred! {errorMsg}</div>;
  }

  return (
    <div className='container'>
      <p className='arrow arrow-left' onClick={leftArrow}>
        &larr;
      </p>
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className={
                currentSlide === index ? 'current-image' : 'hide-current-image'
              }
            />
          ))
        : null}
      <p className='arrow arrow-right' onClick={rightArrow}>
        &rarr;
      </p>
      <span className='circle-indicators'>
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? 'current-indicator'
                    : 'current-indicator inactive-indicator'
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
