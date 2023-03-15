import React from 'react';

export default function Card(props) {



    const [isActive, setActive] = React.useState(false);

    function toggle() {
        setActive(prevState => !prevState);
    }

    
    return (
        <div className='column'>
            <div className='row'>
                <div className='card'>
                   
                    <div className="badge"><i className="material-icons" onClick={toggle} style={{ color: isActive ? '#ffafd0' : '#f5f5f5' }}>favorite</i></div>
                    <img src={props.card.image} alt="Apartment" width="350px" height="350px" />
                    <div className='card__stats'>
                        <h4 className='card__title'>{props.card.title}</h4>
                        <div className="rating__stats">
                            <span className='material-symbols-outlined'>star_rate</span>
                            <p>{props.card.rating}</p>
                        </div>
                    </div>
                </div>
                <div className="card__info">
                    <div className="gray">
                        <div className="distance">
                            <p>{props.card.distance}</p>
                        </div>
                        <div className="date">
                            <p>{props.card.date}</p>
                        </div>
                    </div>
                    <div className="pricing">
                        <p><span className="price">R{props.card.price} ZAR</span> night</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


