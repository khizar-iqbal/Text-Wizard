import React, { useState } from "react";

export default function About(props) {
  // const [btnText, setBtnText] = useState("Enable Dark Mode");

  let darkModeStyle = {
    color: "white",
    backgroundColor: "black",
  };

  let lightModeStyle = {
    color: "black",
    backgroundColor: "white",
  };

  const myStyle = props.mode === "light" ? lightModeStyle : darkModeStyle;

  // const toggleStyle = () => {
  //   if (myStyle.color === 'black') {
  //       setMyStyle(darkModeStyle)
  //       setBtnText("Enable Light Mode")
  //   }
  //   else {
  //       setMyStyle(lightModeStyle)
  //       setBtnText("Enable Dark Mode")
  //   }
  // }

  return (
    <div className="container" style={myStyle}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About 1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </strong>{" "}
              Fugiat similique ad tempora vitae ipsam corporis quis, nobis ut
              laborum quos, tempore consectetur, sequi illum quod officiis
              impedit. Porro, <code>necessitatibus totam!</code>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              About 2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </strong>{" "}
              Illo esse, perferendis nostrum delectus praesentium minus dolore
              aliquam officiis officia cupiditate blanditiis pariatur ipsam nam?
              Animi tenetur incidunt iure id distinctio.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              About 03
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            <strong>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </strong>{" "}
              Illo esse, perferendis nostrum delectus praesentium minus dolore
              aliquam officiis officia cupiditate blanditiis pariatur ipsam nam?
              Animi tenetur incidunt iure id distinctio.
            </div>
          </div>
        </div>
      </div>
      {/* <button type="button" className="btn btn-primary mx-3 my-3" onClick={toggleStyle}>
        {btnText}
      </button> */}
    </div>
  );
}
