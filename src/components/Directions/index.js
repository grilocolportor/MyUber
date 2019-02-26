import React from 'react';

import MapViewDirections from 'react-native-maps-directions';

const Directions = ({destination, origin, onReady}) => 
        <MapViewDirections
        
            destination={destination}
            origin={origin}
            onReady={onReady}
            apikey='AIzaSyDTgx2jLkQxe5uotKfK4BsqVPwwQ8gd7C8'
            strokeWidth={3}
            strokeColor="#222"
        
        />;

export default Directions;

