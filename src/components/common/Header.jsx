import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/common/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="inner">
        {/* 좌측 로고 */}
        <Link to="/" className="logo">
          <span className="logo-icon">🏨</span> {/* 아이콘 이미지가 있다면 img 태그로 교체 */}
          <span className="logo-text">Hotels</span>
        </Link>

        {/* 우측 메뉴 */}
        <div className="header-right">
          <Link to="/mypage/wishlist" className="header-item">
            <span className="icon">♥</span>
            <span className="text">찜하기</span>
          </Link>
          <div className="divider">|</div>
          <Link to="/mypage" className="header-item user-profile">
            <div className="avatar">T</div>
            <span className="text">Tomhoon</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;