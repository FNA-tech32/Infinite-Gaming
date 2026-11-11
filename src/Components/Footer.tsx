import React from "react";
import styled, { keyframes } from "styled-components";


const footerAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const FooterStyle = styled.div`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: #333;
    animation: ${footerAnimation} 1s linear;
    .footer-left{
        width: 38%;
        @media (max-width: 420px) {
            width: 100%;
        }
        &-top{
            font-family: Jakarta-display;
            font-size: 1.5rem;
            font-weight: 600;
            padding: 1rem 0;
        }
        &-bottom{
            font-family: Jakarta-text;
            font-size: 1rem;
            font-weight: 200;
            border-top: 1px solid #333;
            padding: 1rem 0;
            @media (max-width: 800px) {
                font-size: 10px;
            }
            div{
                display: flex;
                justify-content: space-between;
                span{
                    width: 50%;
                    margin-bottom: 1rem;
                    &:hover{
                        color: #ccc;
                    }
                }
            }
        }
    }
    .footer-right{
        width: 60%;
        @media (max-width: 420px) {
            width: 100%;
        }
        &-top{
            font-family: Jakarta-display;
            font-size: 1.5rem;
            font-weight: 600;
            padding: 1rem 0;
        }
        &-bottom{
            display: flex;
            justify-content: space-between;
            font-family: Jakarta-text;
            font-size: 1rem;
            font-weight: 200;
            @media (max-width: 800px) {
                font-size: 10px;
            }
            .office{
                border-top: 1px solid #333;
                width: 31%;
                min-height: 10.5rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding-bottom: 0.5rem;
                .city-address{
                    padding-top: 1rem;
                    .city{
                        font-weight: 600;
                        padding-bottom: 0.5rem;
                    }
                    .address{
                        font-size: 0.9rem;
                        line-height: 1.4;
                    }
                }
                .phone{
                    font-size: 0.95rem;
                    font-weight: 500;
                    padding-top: 0.5rem;
                }
            }
        }
    }
`

const Footer = () =>{
    return(
        <FooterStyle>
            <div className="footer-left">
                <div className="footer-left-top">Get in Touch</div>
                <div className="footer-left-bottom">
                    <div>
                        <span>New Business</span>
                        <span><a href="mailto:partners@infinitegaming.com">partners@infinitegaming.com</a></span>
                    </div>
                    <div>
                        <span>Press Inquiries</span>
                        <span><a href="mailto:press@infinitegaming.com">press@infinitegaming.com</a></span>
                    </div>
                    <div>
                        <span>Alternative Support</span>
                        <span><a href="mailto:support@infinitegaming.com">support@infinitegaming.com</a></span>
                    </div>
                    <div>
                        <span>Main Studio Line</span>
                        <span><a href="tel:+12065550199">+1 (206) 555-0199</a></span>
                    </div>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-right-top">Offices</div>
                <div className="footer-right-bottom">
                    <div className="office">
                        <div className="city-address">
                            <div className="city">Seattle HQ</div>
                            <p className="address">
                                100 Innovation Way,
                                <br/>
                                Suite 400,
                                <br/>
                                Seattle, WA, 98101
                            </p>
                        </div>
                        <div className="phone">+1 (206) 555-0199</div>
                    </div>
                    <div className="office">
                        <div className="city-address">
                            <div className="city">Boston Studio</div>
                            <p className="address">
                                1234 State St,
                                <br/>
                                Suite 3300,
                                <br/>
                                Boston, MA, 02109
                            </p>
                        </div>
                        <div className="phone">+1 (617) 555-6170</div>
                    </div>
                    <div className="office">
                        <div className="city-address">
                            <div className="city">Austin Hub (Alt)</div>
                            <p className="address">
                                600 Congress Ave,
                                <br/>
                                Floor 14,
                                <br/>
                                Austin, TX, 78701
                            </p>
                        </div>
                        <div className="phone">+1 (512) 555-0144</div>
                    </div>
                </div>
            </div>
        </FooterStyle>
    )
}

export {Footer}