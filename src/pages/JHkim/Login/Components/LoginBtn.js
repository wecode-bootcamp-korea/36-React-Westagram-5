import { Link } from 'react-router-dom';
import './LoginBtn.scss';

function LoginBtn({ to, className, disabled }) {
  return (
    <Link to={to}>
      <button
        className={className}
        type="button"
        id="login-button"
        disabled={disabled}
      >
        로그인
      </button>
    </Link>
  );
}

export default LoginBtn;
