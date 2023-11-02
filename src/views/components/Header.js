/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const headerStyle = css`
  text-align: center;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b72025;
  color: white;
`;

const logoIconStyle = css`
  height: 60px;
  position: relative;
  top: 13px;
  padding: 0 10px;
`;

const logoTextStyle = css`
  font-size: 48px;
  font-family: "New Rocker", sans-serif;
  padding: 0 10px;
`;

function Header() {
  return (
    <div css={headerStyle}>
      <div>
        <span>
          <img
            css={logoIconStyle}
            src={require("../images/icon.png")}
            alt="Zema"
          />
        </span>
        <span css={logoTextStyle}>Zema</span>
      </div>
    </div>
  );
}

export default Header;
