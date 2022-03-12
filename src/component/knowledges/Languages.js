import React, {Component} from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
    languageDB ={
        language:[
            {id:1, value: "PHP", xp:1},
            {id:1, value: "javascript", xp:1},
            {id:1, value: "Css", xp:1},
            {id:1, value: "Sass", xp:1},
            {id:1, value: "python", xp:1},
        ],
        framework:[
            {id: 1, value: "React", xp: 0.7},
            {id: 1, value: "Laravel", xp: 1},
            {id: 1, value: "Sass", xp: 1.4},
            {id: 1, value: "Neos", xp: 1.3},
        ]
    }
render(){
    let{language, framework} = this.languageDB;

    return(
        <div className="languagesFrameworks">
            <ProgressBar languages={language} className="languagesDisplay" title="languages"/>
            <ProgressBar languages={framework} title="frameworks & bibliothèques" className="frameworksDisplay"/>
        </div>
    );
}
};

export default Languages;