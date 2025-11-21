import React, { useState } from "react";
import styles from "../css/MyButton.module.css";

function MyButton() {
  //   const styleOb = {
  //     backgroundColor: "black",
  //     color: "white",
  //     fontWeight: "bold",
  //     textAlign: "center",
  //   };

  //   const [flag, setFlag] = useState(false);

  return (
    <div>
      {/* style={flag ? styleOb : {}} */}
      {/* <h1 className="">This is my button</h1> */}
      {/* <button
        onClick={() => {
          setFlag(!flag);
        }}
      >
        Change theme
      </button> */}
      <h1 className={styles.heading}>This is button heading</h1>
      <button className={styles.btn}>Click Here</button>
    </div>
  );
}

export default MyButton;
