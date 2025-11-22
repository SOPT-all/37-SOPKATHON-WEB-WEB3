import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/router/constant/routes';
import * as styles from './Header.css';
import { IconArrowLeft } from '@/shared/assets/components';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isResultDetailPage =
    location.pathname.startsWith(ROUTES.RESULTS) &&
    location.pathname !== ROUTES.RESULTS;

  const shouldShowBackButton =
    location.pathname === ROUTES.POST ||
    location.pathname === ROUTES.ARCHIVE ||
    isResultDetailPage;

  const shouldShowCheckButton = location.pathname === ROUTES.RESULTS;

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleCheckClick = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <header className={styles.headerStyle}>
      {shouldShowBackButton ? (
        <button className={styles.backButtonStyle} onClick={handleBackClick}>
          <IconArrowLeft width='2.4rem' height='2.4rem' />
        </button>
      ) : (
        <div></div>
      )}
      {shouldShowCheckButton && (
        <button className={styles.checkButtonStyle} onClick={handleCheckClick}>
          확인
        </button>
      )}
    </header>
  );
};

export default Header;
