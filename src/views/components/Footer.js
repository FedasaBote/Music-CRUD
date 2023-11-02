/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const footerStyle = css`
  background-color: #ffedef;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const footerTextStyle = css`
  color: #555;
  font-size: 0.75rem;
`;

function Footer() {
  return (
    <div css={footerStyle} className="footer">
      <p css={footerTextStyle} className="footer__text">
        &copy; Fedasa. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
