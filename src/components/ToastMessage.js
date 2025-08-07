// /Users/shin-junwoo/슈퍼코딩/코드 설명/250804/src/components/ToastMessage.js

// 1. React 라이브러리를 가져옵니다.
// JSX 문법(HTML처럼 보이는 JavaScript)을 사용하기 위해 필수적입니다.
import React from "react";

// 2. ToastMessage 함수형 컴포넌트를 정의합니다.
// 부모 컴포넌트(Toast.js)로부터 'message' 객체를 props로 전달받습니다.
// { message }는 props.message 대신 message를 바로 사용할 수 있게 하는 '구조 분해 할당' 문법입니다.
const ToastMessage = ({ message }) => {
  // 3. 컴포넌트가 화면에 렌더링할 JSX를 반환합니다.
  return (
    // 메시지 영역 전체를 감싸는 컨테이너입니다.
    // BEM 방법론에 따라 'toast__message'라는 클래스 이름을 사용합니다.
    // <main> 태그는 문서의 주요 콘텐츠를 나타내는데, 여기서는 <div>가 더 적합할 수 있습니다. (아래 개선 제안 참고)
    <main className="toast__message">
      {/* 메시지의 제목을 표시하는 부분입니다. */}
      <header className="toast__message-title">{message.title}</header>
      {/* 메시지의 본문 내용을 표시하는 부분입니다. */}
      <p className="toast__message-text">{message.text}</p>
    </main>
  );
};

// 4. ToastMessage 컴포넌트를 다른 파일에서 import하여 사용할 수 있도록 내보냅니다.
export default ToastMessage;
