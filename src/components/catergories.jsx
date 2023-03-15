import React from 'react';

export default function Catergories(props) {

    return (
        <div className='catergory__row'>
            <ul className="icon__contents">
                <li><a href='/'><span className='material-symbols-outlined'>{props.iconname}</span></a></li>
                <span className="icon__label">{props.name}</span>
            </ul>
        </div>
    )
}