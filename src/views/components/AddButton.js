/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef, useEffect } from "react";

const addButtonStyle = css`
  display: flex;
  align-items: center;
  height: 45px;
  width: 180px;
  background-color: #e46700;
  box-sizing: border-box;
  margin: 0;
  border-radius: 20px;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);

  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: none;
    transform: scale(0.95);
    transition: all 0.3s;
  }

  .section__add-btn--icon {
    height: 24px;
    margin: 0 1rem;
  }

  .section__add-btn--text {
    position: relative;
    top: -3px;
    font-size: 1.25rem;
  }
`;

function AddButton(props) {
  let blur = useRef(null);

  useEffect(() => {
    const clickHandler = (e) => {
      props?.handleBlur?.call(e);
    };

    const currentBlurRef = blur.current;
    currentBlurRef.addEventListener("click", clickHandler);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      currentBlurRef.removeEventListener("click", clickHandler);
    };
  }, [props]);

  return (
    <div
      css={addButtonStyle}
      className="section__add-btn btns toggler"
      ref={blur}
    >
      <span className="section__add-btn--icon icon">
        <img src={require("../images/add_icon.png")} alt="add icon" />
      </span>
      <span className="section__add-btn--text">{props.text}</span>
    </div>
  );
}

export default AddButton;
