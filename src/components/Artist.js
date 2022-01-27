import React from 'react';
import Icon from "./ui/Icon.js";

const Artist = ({type, i, index, artistIndex, artist, links, activeClass, onPreview, onStop, onNext}) => {

  return (
    <li className={type+" truncate link-margin-"+links+activeClass}>
      <div className="icons">
        <a onClick={() => onPreview(index, artistIndex, artist)}><Icon type="play" classes={index+"_"+artistIndex+" icon-link icon-play"}/></a> 
        <a onClick={() => onStop()}><Icon type="pause" classes="icon-link icon-pause" /></a>
        <a onClick={() => onNext()}><Icon type="next" classes="icon-link icon-next" /></a>
      </div>
      <span className="artist">{artist}</span>
    </li>
  );

}
export default Artist;