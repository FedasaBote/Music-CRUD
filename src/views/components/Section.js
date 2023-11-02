/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AddButton from "./AddButton";

const sectionHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  background: linear-gradient(#ffedef, white);
`;

const sectionHeaderLabelStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 100px;
`;

const sectionHeaderIconStyle = css`
  position: relative;
  top: 5px;
`;

const sectionHeaderTextStyle = css`
  padding: 10px;
`;

const sectionAddButtonStyle = css`
  height: 50px;
  width: 180px;
  background-color: #e46700;
  box-sizing: border-box;
  margin: 10px;
  border-radius: 20px;
  color: white;
  margin-right: 100px;
`;

const sectionAddButtonTextStyle = css`
  padding: 10px 10px 10px 0;
  position: relative;
  top: -2px;
`;

const iconStyle = css`
  img {
    height: 24px;
    padding: 10px;
  }
`;

const sectionCardListStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

function Section(props) {
  return (
    <div className="section">
      <div css={sectionHeaderStyle} className="section__header">
        <div css={sectionHeaderLabelStyle} className="section__header-label">
          <span
            css={sectionHeaderIconStyle}
            className="section__header--icon icon"
          >
            <img src={require("../images/music_icon.png")} alt="music icon" />
          </span>
          <span css={sectionHeaderTextStyle} className="section__header--text">
            All Section
          </span>
        </div>
        <div css={sectionAddButtonStyle} className="section__add-btn">
          <span
            css={sectionAddButtonTextStyle}
            className="section__add-btn--text"
          >
            Add Music
          </span>
          <AddButton text="Add Music" handleBlur={props.handleBlur} />
        </div>
      </div>
      <div css={sectionCardListStyle} className="section__card-list">
        {props.children}
      </div>
    </div>
  );
}

export default Section;
