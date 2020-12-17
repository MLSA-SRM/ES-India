import React from 'react';
import Header from '../../nav-header/nav-header.js';
import classes from "./introStyle.module.css";
import "./intro.css";
import Building from '../../../assets/BuildingForIntro.svg';
import man from '../../../assets/Image2Intro.svg';

const Intro = () => {
    return(
        <div className={classes.main}>
            <Header />
            <div className={classes.HeadingDesign}>
                <p className={classes.frontText}>
                    We are<br />EXPERT<br />AE SOLUTIONS                
                </p>
                <p className={classes.backgroundText}>
                    We are<br />EXPERT<br />AE SOLUTIONS
                </p>
                <div className={classes.buttonContainer}>
                    <a href="#abt" className="button">Know More</a>
                </div>
            </div>
            <div className={classes.buildingImageContainer}>
                <img src={Building}/>
            </div>
            <div className={classes.workIntro}>
                <p>
                    The best AE consultancy services!
                    With a track record of satisfied clients 
                    and on-time work completion, you would 
                    definitely want us to be your consultant.
                </p>
                <br />
                <p>
                    The firm has continued to imbibe the vision 
                    of “Safe, Durable and Economical Structures” 
                    from its ambitious, industrious and tenacious 
                    partners. At present, the firm functions with 
                    multi-discipline and experienced experts, well 
                    qualified staff and other professionals.
                </p>
            </div>
            <div className={classes.ManImageContainer}>
                <img src={man}/>
            </div>
            <div></div>
        </div>
    )
};

export default Intro;