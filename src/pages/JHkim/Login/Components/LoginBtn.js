import './LoginBtn.scss';

function LoginBtn({ className, disabled, onClick }) {
  return (
    <button
      className={className}
      type="submit"
      id="login-button"
      disabled={disabled}
      onClick={onClick}
    >
      로그인
    </button>
  );
}

export default LoginBtn;
