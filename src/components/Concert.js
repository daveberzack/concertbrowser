import React from "react";
import Icon from "./ui/Icon.js";
import Artist from "./Artist.js";
import "../css/Concert.css";

const Concert = ({
  concert: {
    index,
    time,
    venueName,
    minPrice,
    maxPrice,
    detailUrl,
    ticketUrl,
    headliners,
    openers
  },
  onPreview,
  onStop,
  onNext,
  previewedListingIndex,
  previewedArtistIndex,
}) => {

  const formatPrice = (p1, p2) => { //todo: simplify this
    let priceString = "";
    if (p1==="0") p1="Free"
    else p1 = "$"+p1;
    if (p2 && p2!=="0") p2="$"+p2;

    if (p1!=="" && p2!==""){
      priceString = p1+" - "+p2;
    }
    else if (p1 && p1!==""){
      priceString = p1;
    }
    else if (p2 && p2!==""){
      priceString = p2;
    }
    return priceString;
  };

  let links = 0;
  if (detailUrl && detailUrl!=="") links++;
  if (ticketUrl && ticketUrl!=="") links++;

  let artistIndex=-1;

  return (
    <div className="concert-listing"><div className="concert-listing-inner">
      <div className="listingContent row">
        <div className="col-sm-7">
          <ul className="artists">
            {headliners
              .map((artist, i) => {
                artistIndex++;
                const activeClass = (index===previewedListingIndex && previewedArtistIndex===artistIndex) ? " active" : "";
                return (
                  <Artist 
                    key={i+artist}
                    type="headliner" 
                    i={i} 
                    index={index} 
                    artistIndex={artistIndex}
                    artist={artist}
                    links={links}
                    activeClass={activeClass}
                    onPreview={onPreview}
                    onStop={onStop}
                    onNext={onNext}
                  />
                );
              })}

            {openers
              .map((artist, i) => {
                artistIndex++;
                const activeClass = (index===previewedListingIndex && previewedArtistIndex===artistIndex) ? " active" : "";
                return (
                  <Artist 
                    key={i+artist}
                    type="opener" 
                    i={i} 
                    index={index} 
                    artistIndex={artistIndex}
                    artist={artist}
                    links={links}
                    activeClass={activeClass}
                    onPreview={onPreview}
                    onStop={onStop}
                    onNext={onNext}
                  />
                );
              })}
          </ul>
        </div>

        <div className="col-sm-5">
          <ul className="details">
            
            <li className={"venue truncate link-margin-"+links}>
              <Icon type="location" classes="icon-grey"/> 
              <span>{venueName}</span>
            </li>

            { time &&
              <li className="time">
                <Icon type="time" classes="icon-grey"/> 
                <span>{time}</span>
              </li>
            }

            { minPrice &&
              <li className="price">
                <Icon type="price" classes="icon-grey"/> 
                <span>{formatPrice(minPrice,maxPrice)}</span>
              </li>
            }

          </ul>
        </div>
        
        <div className="links">
          {detailUrl &&
            <a className="infoLink" href={detailUrl} target="new">
              <Icon type="info" classes="icon-link"/> 
            </a>
          }
          {ticketUrl &&
            <a className="ticketLink" href={ticketUrl} target="new">
              <Icon type="ticket" classes="icon-link"/> 
            </a>
          }
        </div>
        
      </div>

    </div></div>
  );
};

export default Concert;
