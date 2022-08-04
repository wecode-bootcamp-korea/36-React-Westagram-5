import { useState } from 'react';
import './LikeBtn.scss';

function LikeBtn() {
  const [like, setLike] = useState(true);
  return (
    <button
      className="like-button"
      onClick={() => {
        setLike(!like);
      }}
    >
      {like === true ? '🤍' : '🧡'}
    </button>
  );
}

export default LikeBtn;
