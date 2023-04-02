import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import '../contents/play/play.scss';

const Modal = () => {
    const navigate = useNavigate();
    const play = useSelector(state => state.play.play);
    const { work } = useParams();
    const content = play.find(n => n.slug === work);

    return (
        <div className='bg'>
            <div className='modal'>
                <button className='close' onClick={() => navigate(-1)}> × </button>
                <img src={content.thumb} />
                <div className=''>
                    <h2>{content.title}</h2>
                    <div className='info'>
                        <ul className='taglist'>{content.tags.map((tag, i) => <li key={i}>{tag}</li>)}</ul>
                        <p className='date'>{content.year}</p>
                    </div>
                    <p>{content.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;