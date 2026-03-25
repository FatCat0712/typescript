import React, { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const Loader = () => {
  const [status, setStatus] = useState<Status>("idle");
  return <div>Loader</div>;
};

export default Loader;
