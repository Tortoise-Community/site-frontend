import React, { useEffect, useState } from "react";

export default function ExternalRedirectSilent({ url }) {
  window.location.replace(url);
  return <></>;
}
