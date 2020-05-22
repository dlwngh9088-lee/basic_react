import React from 'react';

const Card = ({ movie }) => {
    return (
        <React.Fragment>
            <div className="card">
                <h2 className='card-title'>{`${movie.ranking} - ${movie.title} (${movie.year})`}</h2>
                <img src={movie.img.src} alt={movie.img.alt} width='200' className='card-img-top' />
                <div className="card-body">
                    <ul className='list-group list-group-flush'>
                        <li className="list-group-item">{`Distributor: ${movie.distributor}`}</li>
                        <li className="list-group-item">{`Amount: ${movie.amount}`}</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card;