import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Concert from "./Concert.js"
import "../css/ConcertList.css";

const ConcertList = ({concerts, onPreview, onStop, onNext, isLoaded, previewedListingIndex, previewedArtistIndex, dateSelected}) => {

  const dateToString = function(d) {
    const mm = d.getMonth()+1;
    const dd = d.getDate();
    const yyyy =d.getFullYear();
    const dateString = `${yyyy}-${(mm>9 ? '' : '0') + mm}-${(dd>9 ? '' : '0') + dd}`;
    return dateString;
  };

  if (!isLoaded) return ( //show loading initially
    <div id="data-message">
      <Spinner animation="border" />
      <h3>Loading...</h3>
    </div>
  );

  else if (concerts==null || concerts.length<1) return ( //if loaded, but no data, error
    <div id="data-message">
      <h3>Error Loading data</h3>
    </div>
  );
  
  else { //populate date sections array. each is a jsx node with a header and all listing nodes for that date
    
    let listings = concerts
      .filter( (concert) => {
        return concert.date===dateToString(dateSelected);
      })
      .map(function(concert) {
        return <Concert 
          key={concert.index} 
          concert={concert} 
          onPreview={onPreview} 
          onStop={onStop} 
          onNext={onNext} 
          previewedListingIndex={previewedListingIndex} 
          previewedArtistIndex={previewedArtistIndex}
        />

      })
    
    return (
      <div id="concert-list">
        {listings}
      </div>
    );
  }

}

export default ConcertList;