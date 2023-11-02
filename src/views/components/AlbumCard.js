/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const cardStyle = css`
  display: flex;
  flex-direction: column;
  width: 200px;
  border-radius: 30px;
  box-shadow: 0 4px 12px;
  margin: 1.5rem;
`;

const cardImageStyle = css`
  img {
    height: 200px;
    width: 200px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
  }
`;

const cardContentStyle = css`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  background-color: #f8f7f7;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
`;

const cardContentIconStyle = css`
  flex: 1;

  img {
    height: 40px;
  }
`;

const cardContentTextStyle = css`
  flex: 2;
  letter-spacing: 1px;
`;

const cardContentTitleStyle = css`
  font-size: 16px;
  margin: 0.5rem 0;
`;

const cardContentSubtitleStyle = css`
  font-size: 12px;
  color: #666;
  margin: 5px 0;
`;

function AlbumCard({ album }) {
  return (
    <div css={cardStyle} className="card">
      <div css={cardImageStyle} className="card__image">
        <img
          src={album.url ? album.url : require("../images/cover/cover_1.png")}
          alt=""
        />
      </div>
      <div css={cardContentStyle} className="card__content">
        <div css={cardContentIconStyle} className="card__content-icon icon">
          <img
            src={
              album.url ? album.url : require("../images/brown_music_icon.png")
            }
            alt=""
          />
        </div>
        <div css={cardContentTextStyle} className="card__content-text">
          <h1 css={cardContentTitleStyle} className="card__content-title">
            {album.name}
          </h1>
          <h2 css={cardContentSubtitleStyle} className="card__content-subtitle">
            {album.artist}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AlbumCard;
