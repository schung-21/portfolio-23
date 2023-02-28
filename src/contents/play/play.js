import React from "react";
// import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import './play.scss';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
  
const images = importAll(require.context('../../assets/play', false, /\.(png|jpe?g|svg)$/));
  
const Play = () => {
    const playlist = Object.values(images);

    return (
        <div className='play'>
            {playlist.map((image, i) => <Link className='play-thumb' key={i}><img src={image}/></Link>)}
        </div>
    );
};

export default Play;