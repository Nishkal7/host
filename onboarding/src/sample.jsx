import React from "react";
import ErrorBoundary from "./ErrorBoundary";
const RemoteApp = React.lazy(() => import("Remote/Home"));
const RemoteButton = React.lazy(() => import("Remote/Button"));

const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
      padding:10,
      margin: 10,
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

const SamplePoc = () => {
  return (
    <>
      <h1>Remote App : </h1>
      <React.Suspense fallback={<div>Loading Microfrontend Comp...</div>}>
        <RemoteWrapper>
          <RemoteButton />
        </RemoteWrapper>
        <RemoteWrapper>
          <RemoteApp />
        </RemoteWrapper>
      </React.Suspense>
      <br />
      <a href="http://localhost:4000">Link to Remote App</a>
    </>
  );
};

export default SamplePoc;
