function MainRightStory({ className, onEvent }) {
  return (
    <div className={className}>
      <ul>{onEvent}</ul>
    </div>
  );
}

export default MainRightStory;
