import { useEffect, useState } from 'react';
import './Story.scss';

function Story({ className }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch('/data/HyukskeeImgList.json')
      .then(response => response.json())
      .then(setImages);
  }, [images]);
  return (
    <div className={className}>
      <ul>
        {images.map(list => (
          <li key={list.id}>
            <img src={list.src} alt={list.alt} />
            {list.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Story;
