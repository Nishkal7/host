import React from "react";
import ErrorBoundary from "./ErrorBoundary";
const RemoteApp = React.lazy(() => import("Remote/App"));
const RemoteButton = React.lazy(() => import("Remote/Button"));

const RemoteWrapper = ({children}) => (
  <div style={{
    border: "1px solid red",
    background: "white",
  }}>
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export const App = () => (
  <div>
    <h1>This is Host App</h1>
    <br />
    <h1>Remote App : </h1>
    <RemoteWrapper>
      <RemoteApp />
    </RemoteWrapper>
    <RemoteWrapper>
      <RemoteButton />
    </RemoteWrapper>
    <br />
    <a href="http://localhost:4000">Link to Remote App</a>
  </div>
);
export default App;