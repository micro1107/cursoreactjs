import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city}) => {
    //Destructuring
    /*
    const {city} = props;
    */

    return (
    <div className="locationCont">
        <h1>{city}</h1>
    </div>
    )
};

Location.protoTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;