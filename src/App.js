// /Users/shin-junwoo/슈퍼코딩/코드 설명/250804/src/App.js

// 1. 스타일과 컴포넌트 불러오기
import "./App.css"; // App 컴포넌트에 적용할 CSS 파일을 불러옵니다.
import Toast from "./components/Toast"; // 개별 토스트 메시지의 전체 컨테이너 역할을 하는 컴포넌트입니다.
import ToastMessage from "../src/components/ToastMessage"; // 토스트 메시지의 아이콘과 텍스트 부분을 담당하는 컴포넌트입니다.
import ToastButton from "../src/components/ToastButton"; // 토스트 메시지를 닫는 버튼 컴포넌트입니다.

// 2. App 컴포넌트 정의
// React 애플리케이션의 진입점이자 최상위 컴포넌트입니다.
function App() {
  // 3. 토스트 메시지에 사용할 데이터 배열
  // 각 메시지의 종류(title)와 내용(text)을 객체 형태로 저장합니다.
  const messageArray = [
    {
      title: "success",
      text: "Right On! Your account has been updated.",
    },
    {
      title: "warning",
      text: "Hmmm! Something doesn`t look right.",
    },
    {
      title: "error",
      text: "Uh Oh! Something went terribly wrong.",
    },
  ];

  // 4. 컴포넌트가 화면에 렌더링할 JSX
  return (
    // 모든 토스트 메시지를 감싸는 wrapper div 입니다.
    <div className="wrapper">
      {/* 각 토스트 메시지를 하드코딩하여 하나씩 렌더링합니다. */}
      {/* 첫 번째 'success' 메시지 */}
      <Toast message={messageArray[0]}>
        <ToastMessage message={messageArray[0]} />
        <ToastButton />
      </Toast>
      {/* 두 번째 'warning' 메시지 */}
      <Toast message={messageArray[1]}>
        <ToastMessage message={messageArray[1]} />
        <ToastButton />
      </Toast>
      {/* 세 번째 'error' 메시지 */}
      <Toast message={messageArray[2]}>
        <ToastMessage message={messageArray[2]} />
        <ToastButton />
      </Toast>
    </div>
  );
}

// App 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냅니다.
export default App;
