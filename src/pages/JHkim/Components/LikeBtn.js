import { useState } from "react";
import "./LikeBtn.scss";

function LikeBtn() {
  const [a, setA] = useState(true);
  return (
    <button
      className="like-button"
      onClick={() => {
        setA(!a);
      }}
    >
      {a === true ? "🤍" : "🧡"}
    </button>
  );
}

export default LikeBtn;
