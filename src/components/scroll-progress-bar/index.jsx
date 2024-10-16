import { useEffect, useState } from 'react';
import './style.css';
export default function ScrollProgressBar() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    fetchData();
    window.addEventListener('scroll', handleScrollPercentage);
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  function handleScrollPercentage() {
    // console.log('document.body.scrollTop', document.body.scrollTop);
    // console.log(
    //   'document.documentElement.scrollTop',
    //   document.documentElement.scrollTop
    // );
    // console.log(
    //   'document.documentElement.scrollHeight',
    //   document.documentElement.scrollHeight
    // );
    // console.log(
    //   'document.documentElement.clientHeight',
    //   document.documentElement.clientHeight
    // );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        'https://dummyjson.com/products?limit=100&select=title,price,thumbnail'
      );
      const response = await res.json();
      if (response) setData(response.products);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  console.log(scrollPercentage);
  return (
    <>
      <div className='outside-container'>
        <div className='header-container'>
          <h3 className='header'>Custom Scroll Indicator</h3>
          <div className='progress-bar-container'>
            <div
              className='progress-bar'
              //   style={{ width: { scrollPercentage } }}
              style={{ width: `${scrollPercentage}%` }}
            ></div>
          </div>
        </div>

        {loading ? (
          <p>Loading....</p>
        ) : error ? (
          <p>Error occured {error.message}</p>
        ) : data ? (
          data.length > 0 && (
            <div className='scroll-container'>
              {data && data.length > 0
                ? data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
                  })
                : null}
            </div>
          )
        ) : null}
      </div>
    </>
  );
}
