import React from "react";

const Card = ({ anime }) => {
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl h-auto">
      <figure>
        <img src={anime.coverImage.extraLarge} alt={anime.title.english} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{anime.title.english}</h2>
      </div>
    </div>
  );
};

export default Card;
