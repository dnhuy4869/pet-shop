import React from 'react';
import DogCart from './DogCart';
import './dogs.css';

const DogsPage = ({ allDogs }) => {
    return (
        <section className="dogs-container">
            {
                allDogs.map((dog, index) => {
                    return (
                        <div key={index}>
                            <DogCart id={dog.id} name={dog.name} breed={dog.breed} description={dog.description} price={dog.price} imageUrl={dog.imageUrl} />
                        </div>
                    )
                })
            }
        </section>
    )
}

export default DogsPage;