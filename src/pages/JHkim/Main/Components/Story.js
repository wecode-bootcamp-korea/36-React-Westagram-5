import './Story.scss';

function Story({ onEvent }) {
  return (
    <div className="story">
      <ul>{onEvent}</ul>
    </div>
  );
}

export default Story;
