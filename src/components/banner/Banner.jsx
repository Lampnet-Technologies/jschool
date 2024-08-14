import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './Banner.css';

ReactModal.setAppElement('#root');

export default function Banner(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="banner-container">
        <img src={props.image} alt={props.title} />
        <div className="banner-content">
          <h1>{props.title}</h1>
        </div>
        <div className="banner-play" onClick={openModal}>
         {props.play}
        </div>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal}>Close</button>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qccyDMZASbA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </ReactModal>
    </div>
  );
}
