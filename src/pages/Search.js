import React, { useContext } from 'react'
import { useLocation, Link } from 'react-router-dom';
import TopHeader from '../components/topHeader/TopHeader';
import MiddleHeader from '../components/MiddleHeader/MiddleHeader';
import BottomHeader from '../components/BottomHeader/BottomHeader';
import Footer from '../components/footer/Footer';
import MobileFooter from '../components/mobileFooter/MobileFooter';
import queryString from 'query-string';
import { FetchedData } from '../context/FetchedData';
import ApiData from '../GlobalData/ApiData';

export default function Search() {
  const location = useLocation();
  const { q: query } = queryString.parse(location.search);
  const { products } = useContext(FetchedData)

  // const filterdProducts = products.filter(product =>
  //   product.name.toLowerCase().includes(query.toLowerCase())
  // );
  const filteredProducts = Array.isArray(products)
  ? products.filter(product =>
      product.name && product.name.toLowerCase().includes(query?.toLowerCase() || '')
    )
  : [];




  return (
    <>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
      <div className='container m-auto'>
        <div className='grid grid-cols-1 '>
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className='border  my-2 flex items-center h-32 bg-white rounded-lg overflow-hidden'  >
                <Link className='block' to={`/product/details/${product.id}`} >
                  <img src={`${product.images[0].src}`} className='w-32 h-32' />
                </Link>

                <div className='ml-3'>
                  <h2>{product.name}</h2>
                  <h2>{product.price} {ApiData.currency_ar}</h2>
                </div>
              </div>
            ))
          ) : (
            <div className='text-center p-4 bg-slate-200 w-100'>No products found</div>
          )}
        </div>
      </div>

      <Footer />
      <MobileFooter />
    </>
  )
}
