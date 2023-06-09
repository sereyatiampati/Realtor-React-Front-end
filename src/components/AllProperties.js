import React, {useState,useEffect} from 'react'
import Listing from './Listing';
import Footer from './Footer';

function AllProperties () {
    const [listings, setListings]=useState([])
    useEffect(() => {
        fetch("https://realtor-com.onrender.com/listings").then((response) => {
          if (response.ok) {
            response.json().then((data) => setListings(data));
          }
        });
      }, []);

  return (
    <div style={{height: '100vh', marginBottom: '0'}}>
<section class="section-property section-t8" >
      <div >
        <div id="property-carousel" class="swiper">
          <div class="swiper-wrapper"  style={{display: 'flex', flexWrap: 'wrap', width: '100%', height: '100%', flexDirection: 'row', paddingRight: '0', justifyContent: 'center'}} >
            {listings.map((listing=> <Listing key={listing} listing={listing}/>))}
          </div>
        </div>
        <div class="propery-carousel-pagination carousel-pagination"></div>
      </div>
      
    </section>
    <Footer></Footer>
</div>
  )
}

export default AllProperties