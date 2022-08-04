import { useState } from "react";
import LikeBtn from "./LikeBtn";
import "./Feed.scss";

function Feed(props) {
  const [comments, setComment] = useState([]);
  const [input, setInput] = useState("");
  const [users, setUsers] = useState(["Wecode Bootcamp "]);

  const handleComment = (event) => {
    setInput(event.target.value);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    setComment((prevState) => {
      return [...prevState, input];
    });
    setInput("");
  };

  const disableUpload = (event) => {
    event.preventDefault();
  };

  const deleteLi = (event) => {
    const div = event.target.parentElement;
    const li = div.parentElement;
    li.remove();
  };

  return (
    <div className="feed">
      <article>
        <div className="article-head">
          <h2>
            <img src="img/운명 트로트 2.jpg" alt={"This is profile"} />
            <p>HYUKSKEE</p>
          </h2>
          <i className="fas fa-thin fa-ellipsis"></i>
        </div>
        <div className="article-content">
          <img
            className="article-main-img"
            src="img/야나두.gif"
            alt="This is article"
          />
          <div className="article-btn-img">
            <div className="left-side">
              <img
                className="btn-img"
                src="img/heart.png"
                alt="This is heart icon"
              />
              <img
                className="btn-img"
                src="img/chat.png"
                alt="This is comment icon"
              />
              <img
                className="btn-img"
                src="img/export.png"
                alt="This is share icon"
              />
            </div>
            <img
              className="btn-img"
              src="img/tag.png"
              alt="This is book mark icon"
            />
          </div>
        </div>
        <div className="article-comment">
          <ul id="comment-list">
            {comments.map((comment, idx) => {
              return (
                <li id={idx} key={idx} className="new-li">
                  <span>
                    <strong>{users}</strong>
                    {comment}
                  </span>
                  <div>
                    <button id="delete-button" onClick={deleteLi}>
                      X
                    </button>
                    <LikeBtn />
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="comment-input-wrap">
            <form action="#" method="get">
              <input
                id="comment-input"
                type="text"
                value={input}
                onChange={handleComment}
                placeholder="댓글달기"
              />
              <button
                type="submit"
                id="upload-button"
                onClick={input !== "" ? handleUpload : disableUpload}
              >
                게시
              </button>
            </form>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Feed;
