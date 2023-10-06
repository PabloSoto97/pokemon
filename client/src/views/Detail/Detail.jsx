import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import vulva from "../../img/vulva3.gif";
import vulva2 from "../../img/vulva 4.gif";
import vulva3 from "../../img/vulva 5.gif";
import vulva4 from "../../img/vulva2.gif";

import "./styles.css";

const Detail = (props) => {
  const dispatch = useDispatch();

  const pokemon = useSelector((state) => state.pokeDetail);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      <Link to="/home">
        <button className="btn">Go Back</button>
      </Link>
      <div className="detail-container">
        <div className="tittle-image-pos">
          <div className="detail-tittle">
            <p className="pokemon-name">{pokemon.name}</p>
            <p className="pokemon-id">
              ID: {pokemon.idPoke ? pokemon.idPoke : pokemon.id}
            </p>
          </div>
          <br />
          <div>
            <img
              className="detail-image"
              src={pokemon.img}
              alt={`${pokemon.name}`}
            />
          </div>
        </div>
        <div className="detail-data">
          <p>Health Points {pokemon.hp}</p>
          <p>Attack Points{pokemon.attack}</p>
          <p>Defense Points {pokemon.defense}</p>
          <p>Speed Points {pokemon.speed}</p>
          <p>Height {pokemon.height}</p>
          <p>Weight {pokemon.weight}</p>
          <p>Types: {pokemon.types?.map((e) => e.name + " ")}</p>
        </div>
      </div>
      {/* <div className="vulva2">
        <img src={vulva} alt="vulvasor" />
      </div> */}
      <div className="vulva1">
        <img className="vulva3" src={vulva4} alt="vulvasor2" />
        <img className="vulva2" src={vulva} alt="vulvasor" />
        <img className="vulva4" src={vulva2} alt="vulvasor" />
        <img className="vulva5" src={vulva3} alt="vulvasor" />
      </div>
    </div>
  );
};

export default Detail;
