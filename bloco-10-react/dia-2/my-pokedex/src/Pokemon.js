import React from 'react';
import PropTypes from 'prop-types';
import './App.css'

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props;
        return (
          <div className='pokemon'>
            <div className='infos'>
                <p>{name}</p>
                <p>{type}</p>
                <p>Average Weight: {averageWeight.value}{averageWeight.measurementUnit}</p>
            </div>
             <img src={image} alt={name}></img>
          </div>
      );
    }
}

Pokemon.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Pokemon;