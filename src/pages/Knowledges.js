import React from 'react';
import Languages from "../component/knowledges/Languages";
import Navigation from "../component/Navigation";
import Experience from "../component/knowledges/Experience";
import OtherSkills from "../component/knowledges/OtherSkills";
import Hobbies from "../component/knowledges/Hobbies";

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation/>
            <div className="knowledgesContent">
                <Languages/>
                <Experience/>
                <OtherSkills/>
                <Hobbies/>
            </div>
        </div>
    );
};

export default Knowledges;
