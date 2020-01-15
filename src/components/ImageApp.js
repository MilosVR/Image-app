import React, { useEffect } from "react";
import "./ImageApp.scss";
import { connect } from "react-redux";
import { fetchImages } from "../actions/imageActions";
import ImageGrid from "./ImageGrid";
import ImageList from "./ImageList";
import Loading from "./loading";

const ImageApp = props => {
  useEffect(() => {
    props.fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="image-app-wrap" style={{ minHeight: "100vh" }}>
      {props.image.loading ? (
        <Loading />
      ) : (
        <div className="container">
          <ImageGrid image={props.image.images} />
          <ImageList image={props.image.images} />
        </div>
      )}
    </div>
  );
};

const actions = { fetchImages };
const mapStateToProps = state => {
  return {
    image: state.image
  };
};

export default connect(mapStateToProps, actions)(ImageApp);
