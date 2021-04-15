import React, { useState } from "react";
import { useField } from "@formiz/core";
import { Modal, Button } from "react-bootstrap";
import i18n from "../../i18n";

export const CheckboxField = (props) => {
  const [show, setShow] = useState(false); //modal

  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(
    props
  );
  const { label, required } = props;
  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && (isTouched || isSubmitted);
  const valor = value ? "" : "S";

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      <div
        className={`text-right demo-form-group ${showError ? "is-error" : ""}`}
      >
        <input
          id={id}
          type={"checkbox"}
          value={value ?? ""}
          onChange={() => setValue(valor)}
          onBlur={() => setIsTouched(true)}
          aria-invalid={showError}
          aria-required={!!required}
          aria-describedby={showError ? `${id}-error` : null}
        />
        <label className="base-label" htmlFor={id}>
          {!!required && " * "}
          {label}
        </label>
        <button onClick={openModal} className="boton__noboton">
          {i18n.t("txt_terminosuso")}
        </button>
      </div>
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

      <Modal
        size="lg"
        centered
        backdrop="static"
        keyboard={false}
        show={show}
        onHide={closeModal}
      >
        <Modal.Header>
          <Modal.Title>{i18n.t("txt_terminosuso_may")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              et rhoncus justo, ut porttitor leo. Praesent ac egestas metus, sit
              amet placerat sapien. Donec scelerisque purus eu orci posuere, id
              placerat metus venenatis. Vestibulum ac venenatis ligula, in
              dapibus augue. Mauris mattis ex justo, vel sodales purus rhoncus
              ut. Praesent nec ex purus. Morbi mauris sapien, consequat sit amet
              libero id, lobortis tristique velit.
            </p>
            <p>
              Curabitur vel erat vitae risus placerat lacinia. Nulla tempor
              congue justo at vestibulum. Vestibulum tristique mattis lectus
              vehicula tincidunt. Suspendisse sit amet rhoncus mauris, sed
              feugiat lacus. Aliquam eu dapibus enim, vel bibendum neque. Mauris
              sollicitudin eros elit, accumsan lacinia risus pulvinar eget. Nam
              in nulla augue. Curabitur vel lacinia ex. Phasellus in sagittis
              ligula. Duis tellus neque, euismod sit amet risus in, mattis
              euismod ipsum.
            </p>
          </>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            className="boton__noboton"
            onClick={closeModal}
          >
            {i18n.t("txt_cerrar")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
