import React from "react";
import "../../styles/components/common/Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="inner">
        <div className="newsletter-content">
          <div className="text-content">
            <h2 className="newsletter-title">
              구독서비스
              <br />
              신청해보세요
            </h2>
            <p className="newsletter-desc">
              The Travel
              <br />
              구독하고 쿠폰, 최신 이벤트를 받아보세요.
            </p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Your email address"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </div>
          </form>
          {/* 우측 일러스트 이미지 (배경으로 처리하거나 img 태그 사용) */}
          <div className="newsletter-illustration">
             {/* 이미지 파일이 있다면 여기에 <img src="..." /> 추가 */}
             {/* 현재는 CSS 배경이나 박스로 처리됨 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;