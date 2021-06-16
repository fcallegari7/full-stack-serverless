import React, { useEffect } from "react";
import { Auth } from "aws-amplify";
import Container from "./Container";

function Protected(props) {
  useEffect(() => {
    Auth.currentAuthenticatedUser().catch(() => {
      props.history.push("/profile");
    });
    // eslint-disable-next-line
  }, []);
  return (
    <Container>
      <h1>Protected route</h1>
    </Container>
  );
}

export default Protected;
