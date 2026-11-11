import React from "react";
import styled from "styled-components";
import {Footer} from "../Components/Footer";
import {Key} from "../Credentials";
import {motion} from "framer-motion";
import {useTransitions} from "../Hooks/useTransitions";

const ContactStyle = styled(motion.div)`
    padding: 2rem 5vw;
    color: #333;
    min-height: 90vh;
        .contact-header{
            display: flex;
            align-items: center;
            width: 100%;
            padding: 2rem 0;
            .header-content{
                .title{
                    font-family: Jakarta-display;
                    font-size: 2.2rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                }
                .subtitle{
                    font-family: Jakarta-text;
                    font-size: 1.25rem;
                    font-weight: 200;
                    color: #555;
                }
            }
        }
        .contact-content{
            display: flex;
            justify-content: space-between;
            gap: 3rem;
            margin-bottom: 3rem;
            @media (max-width: 900px) {
                flex-direction: column;
                gap: 2rem;
            }
            .address{
                font-family: Jakarta-text;
                width: 40%;
                @media (max-width: 900px) {
                    width: 100%;
                }
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                .contact-group{
                    border-left: 2px solid #768cff;
                    padding-left: 1rem;
                    .label{
                        font-family: Jakarta-display;
                        font-size: 0.9rem;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        color: #768cff;
                        font-weight: 600;
                        margin-bottom: 0.25rem;
                    }
                    .main-info{
                        font-size: 1.05rem;
                        font-weight: 400;
                        color: #222;
                        margin: 0;
                        line-height: 1.5;
                    }
                    .alt-info{
                        font-size: 0.95rem;
                        font-weight: 200;
                        color: #666;
                        margin-top: 0.25rem;
                        line-height: 1.4;
                    }
                    a{
                        color: #222;
                        text-decoration: none;
                        transition: color 0.2s;
                        &:hover{
                            color: #768cff;
                        }
                    }
                }
            }
            .map{
                width: 60%;
                min-height: 380px;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
                @media (max-width: 900px) {
                    width: 100%;
                    min-height: 300px;
                }
                iframe{
                    -webkit-filter: grayscale(40%);
                    filter: grayscale(40%);
                    width: 100%;
                    height: 100%;
                    min-height: 380px;
                    border: none;
                    @media (max-width: 768px) {
                        min-height: 300px;
                    }
                }
            }
        }

`

const Contact = () =>{
    const {ContactTransition} = useTransitions();
    const mapSrc = Key 
        ? `https://www.google.com/maps/embed/v1/place?key=${Key}&q=Seattle+WA,USA&zoom=14`
        : `https://maps.google.com/maps?q=Seattle%20WA&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    return(
        <ContactStyle variants={ContactTransition} initial="hidden" animate="show" exit="exit">
            <div className="contact-header">
                <div className="header-content">
                    <div className="title">Get In Touch with Infinite Gaming</div>
                    <div className="subtitle">Questions, partnerships, press inquiries, or game development collaborations — we'd love to hear from you.</div>
                </div>
            </div>
            <div className="contact-content">
                <div className="address">
                    <div className="contact-group">
                        <div className="label">Headquarters (Primary)</div>
                        <p className="main-info">
                            Infinite Gaming Studio<br/>
                            100 Innovation Way, Suite 400<br/>
                            Seattle, WA 98101
                        </p>
                        <p className="alt-info">
                            <strong>Alt Studio:</strong> 1234 State St, Suite 3300, Boston, MA 02109
                        </p>
                    </div>

                    <div className="contact-group">
                        <div className="label">Phone Support</div>
                        <p className="main-info">
                            <strong>Direct:</strong> <a href="tel:+12065550199">+1 (206) 555-0199</a>
                        </p>
                        <p className="alt-info">
                            <strong>Alternative / Toll-Free:</strong> <a href="tel:+18004634263">+1 (800) 463-4263</a> (1-800-INF-GAME)
                        </p>
                    </div>

                    <div className="contact-group">
                        <div className="label">Email Addresses</div>
                        <p className="main-info">
                            <strong>General:</strong> <a href="mailto:contact@infinitegaming.com">contact@infinitegaming.com</a>
                        </p>
                        <p className="alt-info">
                            <strong>Alternative / Support:</strong> <a href="mailto:support@infinitegaming.com">support@infinitegaming.com</a><br/>
                            <strong>Press & Partnerships:</strong> <a href="mailto:partners@infinitegaming.com">partners@infinitegaming.com</a>
                        </p>
                    </div>

                    <div className="contact-group">
                        <div className="label">Operating Hours</div>
                        <p className="main-info">
                            Monday – Friday: 9:00 AM – 6:00 PM PST
                        </p>
                        <p className="alt-info">
                            24/7 Priority Support for active partners and game servers
                        </p>
                    </div>
                </div>
                <div className="map">
                    <iframe
                        title="Infinite Gaming Location Map"
                        frameBorder="0"
                        src={mapSrc}
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
            <Footer/>
        </ContactStyle>
    )
}

export {Contact}