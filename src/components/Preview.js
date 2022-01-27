import React, {useEffect, useRef, useState} from 'react';
import '../css/Preview.css';
import YTSearch from 'youtube-search';


const Preview = ({query, isPlaying, resultIndex}) => {

  const playerRef = useRef();
  let [player, setPlayer] = useState( {} );

  const handlePreviewChange = () => {
    if (query==="" || !window.YT){
      loadPreview();
    }
    else {
      updatePreview();
    }
  }

  const handlePlayingChange = () => {
    if (player && player.loadPlaylist){
      if (!isPlaying) player.pauseVideo();
      else player.playVideo();
    }
  }
  const handleIndexChange = () => {
    if (player && player.loadPlaylist){
        player.nextVideo();
    }
  }

  useEffect(handlePreviewChange, [query]);
  useEffect(handlePlayingChange, [isPlaying]);
  useEffect(handleIndexChange, [resultIndex]);

  const loadPreview = () => {
    if (!window.YT) { // If not loaded, load the script asynchronously
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      window.onYouTubeIframeAPIReady = loadPreview2; // onYouTubeIframeAPIReady will load the video after the script is loaded
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    else { // If script is already there, load the video directly
      loadPreview2();
    }
  }

  const loadPreview2 = () => {
    const p = new window.YT.Player(`player`, {
      width: 300,
      height:200,
      autoplay:1,
      showinfo:1
    });
    setPlayer(p);
  }

  const updatePreview = () => {
    if (player && player.loadPlaylist){

      let queryString = "'"+query+"' live music";

      var opts = {
        maxResults: 10,
        key: 'AIzaSyABFovwVhsjB2UL1GBXgtywrCu0G1i8NNw' //todo: use OAuth 2.0 flow instead!!!!
      };
      
      YTSearch(queryString, opts, function(err, results) {
        if (err) console.log("Error",err);
        const videoIds = results.map( v => v.id );
        player.loadPlaylist({playlist:videoIds, index:0, startSeconds:90});
      });
    }
  }

  return (
    <div id="preview" className={ query&&query!=="" ? "shown":""}>
      <iframe ref={playerRef} title="youtubePlayer" id="player" src="https://www.youtube.com/embed?enablejsapi=1&rel=0&autoplay=1" allow="autoplay" frameBorder="0" />
      { (!query||query==="") && <div id="preview-message">
        <img src={process.env.PUBLIC_URL + "/images/discoverlivemusic.jpg"} alt="Discover Live Music" />
      </div> }
    </div>
  )
}

export default Preview;
