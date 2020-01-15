import React, { Fragment, useState } from "react";

const ImageGrid = props => {
  const [toggleGridList, setToggleGridList] = useState(false);

  const toggleGL = () => {
    setToggleGridList(!toggleGridList);
  };

  return (
    <Fragment>
      <div className="image-grid-headline">
        <h2>Hot Tickets</h2>
        <button onClick={toggleGL}>Change view</button>
      </div>
      <div className={`image-grid ${toggleGridList ? "grid-to-list" : ""}`}>
        {props.image &&
          props.image.map(image => {
            return (
              <div key={image.id} className="image-grid-item">
                <div className="image-grid-item-image-author">
                  <p>{image.author}</p>
                  <a href={image.url} target="_blank" rel="noopener noreferrer">
                    <img alt="" src={`${image.download_url}.jpg`} />
                  </a>
                </div>
                <div className="image-grid-item-width-height-wrap">
                  <div className="image-grid-item-width">
                    <img src="./assets/img-icon-width.png" alt="" />
                    <p>Width : {image.width}</p>
                  </div>
                  <div className="image-grid-item-height">
                    <img src="./assets/img-icon-height.png" alt="" />
                    <p>Height : {image.height}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};

export default ImageGrid;
