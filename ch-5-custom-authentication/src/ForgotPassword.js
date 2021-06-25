import React from "react";
import Button from "./Button";
import { styles } from "./Form";

function ForgotPassword(props) {
  return (
    <div style={styles.container}>
      <input
        name="username"
        onChange={(e) => {
          e.persist();
          props.updateFormState(e);
        }}
        style={styles.input}
        placeholder="Username"
      />
      <Button onClick={props.ForgotPassword} title="Reset Password" />
    </div>
  );
}

export default ForgotPassword;
