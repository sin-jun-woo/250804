// /Users/shin-junwoo/슈퍼코딩/코드 설명/250804/src/components/ToastButton.js

// 1. React 라이브러리를 가져옵니다.
// JSX(JavaScript XML) 문법을 사용하기 위해 필수적입니다.
import React from "react";

// 2. ToastButton 함수형 컴포넌트를 정의합니다.
// 이 컴포넌트는 현재 외부로부터 어떤 데이터(props)도 받지 않습니다.
const ToastButton = () => {
  // 3. 컴포넌트가 화면에 렌더링할 JSX를 반환합니다.
  // 'toast__button'이라는 CSS 클래스를 가진 <button> 요소를 생성합니다.
  // 버튼 안에 표시될 텍스트는 'Dismiss'로 고정되어 있습니다.
  return <button className="toast__button">Dismiss</button>;
};

// 4. ToastButton 컴포넌트를 다른 파일에서 import하여 사용할 수 있도록 내보냅니다.
export default ToastButton;
