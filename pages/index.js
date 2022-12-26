import React from "react";

export default function Foo() {
  React.useEffect(() => {
    window.location.assign("/foo");
  }, []);
  return <p>hello</p>;
}
