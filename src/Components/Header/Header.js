import React from "react";

import resume from "../../Img/resume.jpg";

import styles from "./Header.module.css";
// import "./Header.css"

function Header() {
  return (
    
 
   
  
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
         <span> Build </span> Your Professional Resume  <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resume} alt="Resume" />
      </div>
    </div>
    

  );
}

export default Header;