import React from "react";
import { Link } from 'react-router-dom';

import './play.scss';

function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}
  
const images = importAll(require.context('../../assets/play', false, /\.(png|jpe?g|svg|gif)$/));
  
const Play = () => {
    const playlist = Object.values(images);

    return (
        <div className='play'>
            {playlist.map((image, i) => <Link className='play-thumb' key={i}><img src={image} alt='' /></Link>)}
        </div>
    );
};

export default Play;