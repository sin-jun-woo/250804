import "./App.css";
import Toast from "./components/Toast";
import ToastMessage from "../src/components/ToastMessage";
import ToastButton from "../src/components/ToastButton";

function App() {
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

  return (
    <div className="wrapper">
      <Toast message={messageArray[0]}>
        <ToastMessage message={messageArray[0]} />
        <ToastButton />
      </Toast>
      <Toast message={messageArray[1]}>
        <ToastMessage message={messageArray[1]} />
        <ToastButton />
      </Toast>
      <Toast message={messageArray[2]}>
        <ToastMessage message={messageArray[2]} />
        <ToastButton />
      </Toast>
    </div>
  );
}

export default App;
