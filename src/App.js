import logo from "./logo.svg";
import "./App.css";
import root from "react-shadow";

// npm i react-shadow

// react-shadow : 외부의 스타일의 영향을 받지않도록 해주는 모듈
// 특정 요소에 독자적인 shadow DOM을 생성해줌 -> 해당 요소는 외부 스타일의 영향을 받지않는다
// -> 독자적인 스타일 적용

// 사용방법 :
// 1. import root from 'react-shadow'
// 2. <root.div></root.div> 로 해당요소 감싸기
// 3. <style></style> 태그 생성하고 children으로 스타일 넣어주기

const styles = `
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

p {
  color: yellow;
}
`;

function App() {
  return (
    <root.div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <style type="text/css">{styles}</style>
    </root.div>
  );
}

export default App;
