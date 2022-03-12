import React from 'react';
import Languages from "../component/knowledges/Languages";
import Navigation from "../component/Navigation";

const Knowledges = () => {
    return (
        <div className="knowledgesContent">
            <Navigation/>
            <Languages/>
        </div>
    );
};

export default Knowledges;
