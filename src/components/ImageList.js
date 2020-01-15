import React, { Fragment, useState } from "react";

const ImageList = props => {
  const [toggleGridList, setToggleGridList] = useState(false);

  const toggleLG = () => {
    setToggleGridList(!toggleGridList);
  };

  return (
    <Fragment>
      <div className="image-grid-headline">
        <h2>Upcoming Events</h2>
        <button onClick={toggleLG}>Change view</button>
      </div>
      <div className={`image-list ${toggleGridList ? "list-to-grid" : ""}`}>
        {props.image &&
          props.image.slice(2, 5).map(image => {
            return (
              <div key={image.id} className="image-list-item">
                <div className="image-list-item-inner">
                  <img alt="" src={`${image.download_url}.jpg`} />
                  <div className="image-list-item-inner-day-month">
                    <p>Feb</p>
                    <h2>14</h2>
                  </div>
                  <div className="image-list-item-inner-author-width-height">
                    <h4>Mon - 19:30</h4>
                    <p>{image.author}</p>
                    <h3>
                      Width : {image.width} Height: {image.height}
                    </h3>
                  </div>
                </div>
                <a href={image.url} target="_blank" rel="noopener noreferrer">
                  <button>Find pic</button>
                </a>
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};

export default ImageList;
