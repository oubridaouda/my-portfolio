import React from 'react';
import Navigation from "../component/Navigation";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Djibo</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="77549528">
                            <span className="clickInput" onClick={() => {
                                alert('Téléphone Copié')
                            }}>77549528</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <CopyToClipboard text="oubridaouda@gmail.com">
                            <span className="clickInput" onClick={() => {
                                alert('E-mail Copié !')
                            }}>oubridaouda@gmail.com</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="bottom-transversal"></div>
            </div>
        </div>
    );
};

export default Contact;