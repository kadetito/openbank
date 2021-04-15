import React from "react";
import { useField } from "@formiz/core";

export const Campos = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(
    props
  );
  const { label, type, required } = props;
  const [isTouched, setIsTouched] = React.useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  return (
    <div className={`demo-form-group ${showError ? "is-error" : ""}`}>
      <label className="demo-label" htmlFor={id}>
        {label}
        {!!required && " *"}
      </label>
      <input
        id={id}
        type={type || "text"}
        value={value ?? ""}
        className="form-control"
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setIsTouched(true)}
        aria-invalid={showError}
        aria-required={!!required}
        aria-describedby={showError ? `${id}-error` : null}
      />
      {showError && (
        <div className="row">
          <div className="col-12">
            <div
              className="alert alert-dismissable alert-danger  alert__flotante mt-2"
              id={`${id}-error`}
            >
              {errorMessage}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
