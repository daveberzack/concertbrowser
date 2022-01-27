import React, { useState, useEffect } from 'react';
import ConcertList from "./ConcertList.js"
import Header from "./Header.js"
import "../css/Calendar.css";

const Calendar = () => {

  //consolidate to a single state object?
  const [concerts, setConcerts] = useState( [] );
  const [previewQuery, setPreviewQuery] = useState("");
  const [previewIndex, setPreviewIndex] = useState(0); //the index of the video video within the results playlist
  const [previewPlaying, setPreviewPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState( false );
  const [previewedListingIndex, setPreviewedListingIndex] = useState( -1 ); //the index of the concert listing
  const [previewedArtistIndex, setPreviewedArtistIndex] = useState( -1 ); //the index of the artist within that listing
  const [dateSelected, setDateSelected] = useState( new Date() );

  const onDateChanged = (newDate) => {
    setDateSelected( new Date(newDate.getTime()) ); //make sure react rerenders by providing a new object
  }

  const playPreview = (listingIndex, artistIndex, query)=> {
    setPreviewedListingIndex(listingIndex);
    setPreviewedArtistIndex(artistIndex);
    setPreviewPlaying(true);
    setPreviewQuery(query);
  }
  const stopPreview = ()=> {
    setPreviewPlaying(false);
  }
  const nextPreview = ()=> {
    setPreviewPlaying(true);
    setPreviewIndex(previewIndex+1);
  }

  useEffect(() => {
    loadConcertData();
  }, []);


  const loadConcertData = async () => {
    const response = await fetch(`${process.env.PUBLIC_URL}/data/events/atlanta.json`,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
    const json = await response.json();
    setIsLoaded(true);
    setConcerts(json.concerts);
  };

  return (
    <div id="calendar" className={previewPlaying ? "preview-playing" : ""}>
      <Header dateSelected={dateSelected} onDateChanged={onDateChanged} previewQuery={previewQuery} previewPlaying={previewPlaying} previewIndex={previewIndex} />
      <ConcertList concerts={concerts} isLoaded={isLoaded} onPreview={playPreview} onStop={stopPreview} onNext={nextPreview} previewedListingIndex={previewedListingIndex} previewedArtistIndex={previewedArtistIndex} dateSelected={dateSelected} />
    </div>
  );

}
export default Calendar;