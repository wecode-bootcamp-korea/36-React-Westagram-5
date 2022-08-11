import './Story.scss';

function Story({ onEvent }) {
  return (
    <div className="Story">
      <ul>{onEvent}</ul>
    </div>
  );
}

export default Story;
