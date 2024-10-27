import React, { useState } from "react";
import { createContext } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";

const MovieContext = createContext();

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

function MovieProvider({ children }) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [trailerKey, setTrailerKey] = useState("");

  const handleTrailer = async (id) => {
    setTrailerKey("");
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      };

      const movieKey = await fetch(url, options);
      const data = await movieKey.json();
      setTrailerKey(data.results[0].key);
      setModalIsOpen(true);
      console.log(data);
    } catch (error) {
      setModalIsOpen(false);
      console.log(error);
    }
  };
  return (
    <div>
      <MovieContext.Provider value={{ handleTrailer }}>
        {children}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overplay: {
              position: "fixed",
              zIndex: 1000,
            },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            },
          }}
          contentLabel="Example Modal"
        >
          <YouTube videoId={trailerKey} opts={opts}></YouTube>
        </Modal>
      </MovieContext.Provider>
    </div>
  );
}

export { MovieProvider, MovieContext };
