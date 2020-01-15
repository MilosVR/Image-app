import React, { useState } from "react";
import { connect } from "react-redux";
import {
  searchImages,
  smallestImages,
  largestImages
} from "../actions/imageActions";

const Header = props => {
  const [formData, setFormData] = useState("");

  const onChangeHandler = e => {
    setFormData(e.target.value);
    props.searchImages(e.target.value);
  };
  const onSubmitForm = e => {
    e.preventDefault();
    // props.searchImages(formData);
  };
  return (
    <div className="header">
      <form autoComplete="off" onSubmit={onSubmitForm}>
        <div className="header-search-input">
          <label>Search</label>
          <input value={formData} onChange={onChangeHandler} />
          <input type="submit" />
        </div>
      </form>
      <div className="sort-btns">
        <button onClick={props.largestImages}>Largest</button>
        <button onClick={props.smallestImages}>Smallest</button>
      </div>
    </div>
  );
};

const actions = {
  searchImages,
  smallestImages,
  largestImages
};
const mapStateToProps = state => {
  return {
    images: state.image
  };
};

export default connect(mapStateToProps, actions)(Header);
