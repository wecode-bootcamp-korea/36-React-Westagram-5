import React from 'react';
import InputComment from './InputComment';
import './NewFeed.scss';
const NewFeed = ({
  porfile_img,
  name,
  side_img,
  center_img,
  icon_img,
  icon_two_img,
  icon_third_img,
  icon_right_img,
  feed_profile_img,
  post,
  comment,
  view,
}) => {
  return (
    <div className="newFeed">
      <div className="imgtop">
        <img alt="Feed" className="porfile" src={porfile_img} />
        {name}
        <img alt="Feed" className="porfilemenu" src={side_img} />
      </div>
      <div className="article">
        <img alt="Feed" className="articleImg" src={center_img} />
      </div>
      <div className="articleicon">
        <img alt="Feed" className="aicon" src={icon_img} />
        <img alt="Feed" className="aicon" src={icon_two_img} />
        <img alt="Feed" className="aicon" src={icon_third_img} />
        <img alt="Feed" className="aicon save" src={icon_right_img} />
      </div>
      <div className="articleText">
        <img alt="Feed" className="porfileArticle" src={feed_profile_img} />
        &nbsp;
        {post}
      </div>
      <br />
      <div className="articleTextButton">
        {comment}
        <span className="gray">{view}</span>
        <br />
      </div>
      <InputComment />
    </div>
  );
};

export default NewFeed;
