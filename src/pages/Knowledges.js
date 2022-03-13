import React from 'react';
import Languages from "../component/knowledges/Languages";
import Navigation from "../component/Navigation";

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation/>
            <div className="knowledgesContent">
                <Languages/>
            </div>
        </div>
    );
};

export default Knowledges;
