import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "@/router/constant/routes";
import { headerStyle, backButtonStyle } from "./Header.css";
import { IconArrowLeft } from "@/shared/assets/components";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const shouldShowBackButton =
    location.pathname === ROUTES.POST || location.pathname === ROUTES.ARCHIVE;

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <header className={headerStyle}>
      {shouldShowBackButton && (
        <button className={backButtonStyle} onClick={handleBackClick}>
          <IconArrowLeft width="2.4rem" height="2.4rem" />
        </button>
      )}
    </header>
  );
};

export default Header;
