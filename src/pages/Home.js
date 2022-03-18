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
                                .typeString("<h4>Devéloppeur web et mobile </h4>")
                                .pauseFor(200)
                                .deleteAll()
                                .typeString("<h4>Je contribut au projet libre</h4>")
                                .deleteAll()
                                .typeString("<h4>J'apprend les différent technologie de google</h4>")
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        <br/>
                        <br/>
                        industry's standard dummy text ever since the 1500s, when an unknown printer
                        <i><b className="purple"> was popularised in the 1960s</b></i>
                        <br/>
                        <br/>
                        and scrambled it to make a type specimen book. It has survived not only five
                        <i>centuries, but also the</i>
                        <br/>
                        <br/>
                        leap into electronic typesetting, remaining essentially unchanged. It
                        <i><b className="purple"> was popularised in the 1960s</b></i>
                        <br/>
                        <br/>
                        with the release of Letraset sheets <i><b className="purple">containing Lorem Ipsum</b></i> passages, and more recently
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
