import React, { Fragment, useState } from "react";
import Dashboard from "./DashBoard";
import { useDispatch } from "react-redux";
import { createNew } from "./../redux/actions/linkActions";

export default function AddLink() {
  const [items, setItems] = useState({
    url: "",
    title: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setItems({
      [e.target.name]: e.target.value,
    });
  };
  const [url, title] = items;

  // const addLink = (title,url) => {
  //   const newItems = [...items,{title,url}];
  // setItems(newItems)}
  const [modal, setModal] = useState(false);
  return (
    <Fragment>
      <Dashboard />
      <div className="add">
        <div className="title">
          <label htmlFor="Title">Title</label>
          <input
            name="title"
            type="text"
            maxLength="100"
            placeholder="Must not be more than 50 characters long "
            value={title}
            onChange={handleChange}
            id="Title"
          />
        </div>

        <div className="link">
          <label htmlFor="Url">Url</label>
          <input
            name="url"
            type="url"
            placeholder="Must begin with 'https' or 'http' "
            value={url}
            onChange={handleChange}
            id="Url"
          />
        </div>
        <button
          className="btn"
          type="submit"
          onClick={() => {
            setModal(!modal);
            if (!url || !title) {
              alert(" Please fill both input fields!! ");
              return;
            }
            const data = {
              url,
              title,
            };
            dispatch(createNew(data));

            setItems({
              url: "",
              title: "",
            });
          }}
        >
          ADD
        </button>
      </div>
      <div
        className="modal"
        style={{
          display: modal ? "block" : "none",
          backgroundColor: "black",
          color: "white",
          padding: "15px",
          width: "20%",
          height: "50%",
          margin: "auto",
        }}
      >
        <p> Link Added </p>
        <button className="modal-btn" onClick={() => setModal(false)}>
          X
        </button>
      </div>
    </Fragment>
  );
}
