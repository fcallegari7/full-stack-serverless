import React from "react";
import Button from "./Button";
import { styles } from "./Form";

function ForgotPasswordSubmit(props) {
  return (
    <div style={styles.container}>
      <input
        name="confirmationCode"
        onChange={(e) => {
          e.persist();
          props.updateFormState(e);
        }}
        style={styles.input}
        placeholder="Confirmation Code"
      />
      <input
        name="password"
        type="password"
        onChange={(e) => {
          e.persist();
          props.updateFormState(e);
        }}
        style={styles.input}
        placeholder="New Password"
      />
      <Button onClick={props.forgotPasswordSubmit} title="Save new password" />
    </div>
  );
}

export default ForgotPasswordSubmit;
