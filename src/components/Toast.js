// /Users/shin-junwoo/슈퍼코딩/코드 설명/250804/src/components/Toast.js

// 1. React 라이브러리와 필요한 컴포넌트, CSS 파일을 가져옵니다.
import React from "react";
import "./Toast.css"; // 이 컴포넌트에 적용될 스타일 시트
import ToastMessage from "./ToastMessage"; // 토스트 메시지의 제목과 내용을 표시할 자식 컴포넌트

// 2. Toast 컴포넌트를 정의합니다.
// 부모 컴포넌트로부터 'message'라는 객체를 props로 받습니다.
// 예: message = { title: 'success', text: '작업이 성공적으로 완료되었습니다.' }
const Toast = ({ message }) => {
  // 3. 'Dismiss' 버튼을 클릭했을 때 실행될 이벤트 핸들러 함수입니다.
  // 현재는 메시지의 제목(title)을 콘솔에 출력하는 기능만 합니다.
  const buttonClickHandler = (title) => {
    console.log(title);
  };

  // 4. 컴포넌트가 렌더링할 JSX를 반환합니다.
  return (
    // 5. 최상위 div입니다. 여러 개의 Toast를 렌더링할 때 각 Toast를 감싸는 역할을 할 수 있습니다.
    <div>
      {/* 6. 실제 토스트 UI의 컨테이너입니다. */}
      {/* className에 동적인 값을 부여합니다. `toast`는 기본 스타일을, */}
      {/* `toast-${message.title}` (예: 'toast-success')은 메시지 종류(성공, 에러 등)에 따른 특정 스타일을 적용하기 위해 사용됩니다. */}
      <div className={`toast toast-${message.title}`}>
        {/* 7. 메시지의 제목과 본문을 표시하는 ToastMessage 컴포넌트를 렌더링합니다. */}
        {/* 부모로부터 받은 message 객체를 그대로 자식에게 전달합니다. */}
        <ToastMessage message={message} />
        {/* 8. 'Dismiss' 버튼입니다. */}
        <button
          className="toast__button"
          // 9. 버튼 클릭 시 buttonClickHandler 함수를 호출합니다.
          // message.title을 인자로 넘겨주기 위해 화살표 함수로 감싸줍니다.
          // 이렇게 하지 않으면 컴포넌트가 렌더링될 때마다 함수가 즉시 실행되어 버립니다.
          onClick={() => buttonClickHandler(message.title)}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

// 10. 다른 파일에서 이 Toast 컴포넌트를 사용할 수 있도록 내보냅니다.
export default Toast;
