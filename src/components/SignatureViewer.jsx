import { useEffect, useRef } from "react";
import WebViewer from "@pdftron/webviewer";

const SignatureViewer = () => {
  const viewerRef = useRef(null);

  useEffect(() => {
    WebViewer.default(
      {
        path: "/lib",
        initialDoc: "/sample.pdf",
      },
      viewerRef.current
    );
  }, []);

  return <div ref={viewerRef} style={{ height: "100vh" }} />;
};

export default SignatureViewer;