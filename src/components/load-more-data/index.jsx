// import { useEffect, useState } from 'react';
// import './style.css';
// export default function LoadMoreData() {
//   const [products, setProducts] = useState([]);
//   const [skip, setSkip] = useState(20);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     getProducts();
//   }, []);

//   async function getProducts() {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await fetch(
//         'https://dummyjson.com/products?limit=20&select=title,price,thumbnail'
//       );
//       const data = await res.json();
//       if (data) {
//         setLoading(false);
//         setProducts(data.products);
//       }
//     } catch (e) {
//       setLoading(false);
//       setError('Error Occured:' + e.message);
//     }
//   }

//   async function getMoreProducts() {
//     const res = await fetch(
//       `https://dummyjson.com/products?limit=10&skip=${skip}&select=title,price,thumbnail`
//     );
//     const data = await res.json();
//     console.log(data);
//     setProducts((prevProducts) => [...prevProducts, ...data.products]);
//     setSkip((prevSkip) => prevSkip + 10);
//     // console.log({ skip });
//   }

//   function handleLoadMoreData() {
//     getMoreProducts();
//   }

//   console.log(products);
//   return (
//     <>
//       {loading ? (
//         <p>Loading Data...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         products.length > 0 && (
//           <div className='container'>
//             {products.map((item) => (
//               <div key={item.id} className='card'>
//                 <div className='image-container'>
//                   <img src={item.thumbnail} alt={item.title} />
//                 </div>
//                 <p>{item.title}</p>
//               </div>
//             ))}
//             <button
//               disabled={skip === 100}
//               onClick={() => handleLoadMoreData()}
//             >
//               {skip === 100 ? 'No more data' : 'Loade more Data '}
//             </button>
//           </div>
//         )
//       )}
//     </>
//   );
// }
import { useEffect, useState } from 'react';
import './style.css';

export default function LoadMoreData() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(20); // Set initial limit to 20
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts();
  }, [skip, limit]);

  async function getProducts() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,thumbnail`
      );
      const data = await res.json();
      if (data) {
        setLoading(false);
        setProducts((prevProducts) =>
          skip === 0 ? data.products : [...prevProducts, ...data.products]
        );
      }
    } catch (e) {
      setLoading(false);
      setError('Error Occurred: ' + e.message);
    }
  }

  function handleLoadMoreData() {
    setSkip((prevSkip) => prevSkip + limit);
    setLimit(10); // Set limit to 10 for subsequent loads
  }

  console.log(products);
  return (
    <>
      {loading ? (
        <p>Loading Data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        products.length > 0 && (
          <div className='container'>
            {products.map((item) => (
              <div key={item.id} className='card'>
                <div className='image-container'>
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <p>{item.title}</p>
              </div>
            ))}
            <button
              disabled={skip >= 100} // Adjust the condition for your specific use case
              onClick={handleLoadMoreData}
            >
              {skip >= 100 ? 'No more data' : 'Load more Data '}
            </button>
          </div>
        )
      )}
    </>
  );
}
