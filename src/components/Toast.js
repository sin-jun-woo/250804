// React 라이브러리와, 함수형 컴포넌트에서 상태를 관리하기 위한 'useState' 훅을 가져옵니다.
import React, { useState } from "react";
// 이 컴포넌트에 적용될 스타일 시트를 가져옵니다.
import "./Toast.css";
// 토스트 메시지의 제목과 내용을 표시하는 자식 컴포넌트를 가져옵니다.
import ToastMessage from "./ToastMessage";

// Toast 컴포넌트를 정의합니다. 부모로부터 'message' 객체를 props로 전달받습니다.
const Toast = ({ message }) => {
  // useState 훅을 사용하여 컴포넌트의 상태를 관리합니다.
  // 'text'는 상태 변수이며, 초기값은 "sample"입니다.
  // 'setText'는 'text' 상태를 업데이트하는 함수입니다. 이 함수가 호출되면 컴포넌트가 리렌더링됩니다.
  const [text, setText] = useState("sample");

  // 'Dismiss' 버튼을 클릭했을 때 실행될 이벤트 핸들러 함수입니다.
  const buttonClickHandler = (title) => {
    // setText 함수를 호출하여 'text' 상태의 값을 "changed"로 변경합니다.
    setText("changed");
    // 디버깅을 위해 전달받은 title 값을 콘솔에 출력합니다.
    console.log(title);
  };

  // 이 컴포넌트가 화면에 렌더링할 JSX(UI 구조)를 반환합니다.
  return (
    // 최상위 wrapper div 입니다.
    <div>
      {/*
        실제 토스트 UI를 감싸는 div 입니다.
        템플릿 리터럴을 사용하여 동적으로 클래스 이름을 할당합니다.
        'toast' 클래스는 기본으로 적용되고, message.title 값에 따라 'toast-success', 'toast-warning' 등이 추가됩니다.
        이를 통해 메시지 종류별로 다른 스타일을 적용할 수 있습니다.
      */}
      <div className={`toast toast-${message.title}`}>
        {/* 자식 컴포넌트인 ToastMessage를 렌더링하고, 받은 message prop을 그대로 전달합니다. */}
        <ToastMessage message={message} />
        {/* 'text' 상태 변수의 현재 값을 화면에 표시합니다. 버튼 클릭 시 "sample"에서 "changed"로 변경됩니다. */}
        <p>{text}</p>
        {/* 'Dismiss' 버튼입니다. */}
        <button
          className="toast__button"
          // 버튼 클릭(onClick) 시 buttonClickHandler 함수를 실행합니다.
          // 화살표 함수를 사용해야 클릭 시점에만 함수가 실행되며, message.title을 인자로 전달할 수 있습니다.
          onClick={() => buttonClickHandler(message.title)}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

// 다른 파일에서 이 Toast 컴포넌트를 사용할 수 있도록 export 합니다.
export default Toast;
