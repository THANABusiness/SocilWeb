import "./styles.css";
import { useState } from "react";

import { AmityUiKitProvider, AmityUiKitSocial } from "@amityco/ui-kit";

import Login from "./Login";

const apiKey = "b0eeee5e3fd8f76d1932851f5709168884008ee0e8353b7f";

export default function App() {
  const [userId, setUserId] = useState();

  return (
    <div className="App">
      {!userId ? (
        <Login onSubmit={setUserId} />
      ) : (
        <AmityUiKitProvider
          key={userId}
          apiKey={apiKey}
          userId={userId}
          displayName={userId}
        >
          <AmityUiKitSocial />
        </AmityUiKitProvider>
      )}
    </div>
  );
}
