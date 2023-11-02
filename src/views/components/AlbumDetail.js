/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const albumDetailStyle = css`
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  background: linear-gradient(#ffe3e7, white);
`;

const albumImageStyle = css`
  height: 200px;
  border-radius: 20px;
  box-shadow: 0 2px 4px;
  position: relative;
  top: 1rem;
`;

const albumContentStyle = css`
  position: relative;
  top: 1rem;
  left: -10rem;
`;

const albumDetailTextStyle = css`
  color: #938183;
  margin: 0;
`;

const albumActionsStyle = css`
  position: relative;
  top: 1rem;
  left: -12rem;
`;
function AlbumDetail({ albumDetail }) {
  return (
    <div css={albumDetailStyle}>
      <div>
        <img
          css={albumImageStyle}
          src={require("../images/cover/cover_1.png")}
          alt="cover 1"
        />
      </div>
      <div css={albumContentStyle}>
        <h1 css={albumDetailTextStyle}>{albumDetail?.name}</h1>
        <h2 css={albumDetailTextStyle}>{albumDetail?.artist}</h2>
        <h3 css={albumDetailTextStyle}>{albumDetail?.year}</h3>
      </div>
      <div css={albumActionsStyle}>
        <p css={albumDetailTextStyle}>Edit</p>
        <p css={albumDetailTextStyle}>Delete</p>
      </div>
    </div>
  );
}

export default AlbumDetail;
