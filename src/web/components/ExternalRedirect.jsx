import { useEffect } from "react";

export default function ExternalRedirect({ url }) {
  useEffect(() => {
    // window.location.replace is better than .href because it 
    // doesn't keep the redirect page in the browser history.
    window.location.replace(url);
  }, [url]);

  // Render nothing (or a loading spinner) while redirecting
  return null;
}