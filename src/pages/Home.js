import React from 'react';
import Navigation from "../component/Navigation";
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="animattion-text">
                    <p>Salut !</p>
                    <p>Je suis Oubri Daouda</p>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(500)
                                .typeString("<h3 class='purple'>Devéloppeur web et mobile </h3>")
                                .pauseFor(200)
                                .deleteAll()
                                .typeString("<h3 class='purple'>Je contribut au projet libre</h3>")
                                .deleteAll()
                                .typeString("<h3 class='purple'J'apprend les différent technologie de google</h4>")
                                .deleteAll(10)
                                .start()
                        }}
                    />
                </div>
                <div className="dev-image">
                    <img src="./media/Developer_flat_icon.jpg"/>
                </div>
                <div className="content-text">
                    <p>
                        Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work
                        <br/>
                        <br/>
                        for agencies, consulted for startups, and collaborated with talented people to create digital
                        <i><b className="purple"> was popularised in the 1960s</b></i>
                        <br/>
                        <br/>
                        products for both business and consumer use. I'm quietly confident,
                        <i>centuries, but also the</i>
                        <br/>
                        <br/>
                        naturally curious, and
                        perpetually working on improving my chops one design problem at a time.
                        <i><b className="purple"> was popularised in the 1960s</b></i>
                        <br/>
                        <br/>
                        with the release of Letraset sheets <i><b className="purple">containing Lorem
                        Ipsum</b></i> passages, and more recently
                        <i>was popularised in the 1960s</i>

                        <br/>
                        <br/>
                        with desktop
                        <i><b className="purple">containing Lorem Ipsum</b></i> like Aldus PageMaker including
                        versions of Lorem
                        Ipsum.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Home;
