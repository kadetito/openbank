import React from "react";

import { Formiz, FormizStep, useForm } from "@formiz/core";
import { StepUno } from "./steps/StepUno";
import { StepTres } from "./steps/StepTres";
import { StepDos } from "./steps/StepDos";
import OpenBankLogo from "../assets/Logo_Web_6_1_0.svg";
import i18n from "../i18n";

export const LandingScreen = () => {
  const formularioEnvio = useForm();

  const envioSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="container-fluid bg-blanco text-center">
        <img className="img-logo-size" src={OpenBankLogo} alt="Open Bank" />
      </div>
      <div className="container p-5">
        <Formiz
          className="p-0 m-0"
          connect={formularioEnvio}
          onValidSubmit={envioSubmit}
        >
          <form noValidate onSubmit={formularioEnvio.submitStep}>
            {/* PASO 1 */}
            <FormizStep name="step1">
              <StepUno stepvigente={formularioEnvio.currentStep?.name} />
            </FormizStep>
            {/* END PASO 1 */}
            {/* PASO 2 */}
            <FormizStep name="step2">
              <StepDos stepvigente={formularioEnvio.currentStep?.name} />
            </FormizStep>
            {/* END PASO 2 */}
            {/* PASO 3 */}
            <FormizStep name="step3">
              <StepTres stepvigente={formularioEnvio.currentStep?.name} />
            </FormizStep>
            {/* END PASO 3 */}
            <div className="row">
              <div className="col-12 p-4 backactivo text-center d-flex justify-content-center">
                {!formularioEnvio.isFirstStep && !formularioEnvio.isLastStep && (
                  <button
                    className="boton boton__celeste"
                    type="button"
                    onClick={formularioEnvio.prevStep}
                  >
                    {i18n.t("txt_atras")}
                  </button>
                )}
                {formularioEnvio.isLastStep ? (
                  <>
                    <a className="boton boton__celeste" href="/desktop">
                      {i18n.t("txt_cancelarproceso")}
                    </a>
                    <button
                      className=" boton boton__red"
                      type="submit"
                      disabled={!formularioEnvio.isValid}
                    >
                      {i18n.t("txt_acceder")}
                    </button>
                  </>
                ) : formularioEnvio.currentStep.name === "step2" ? (
                  <button
                    className=" boton boton__red"
                    type="submit"
                    disabled={!formularioEnvio.isValid}
                  >
                    {i18n.t("txt_siguiente")}
                  </button>
                ) : (
                  <button
                    className=" boton boton__red"
                    type="submit"
                    disabled={!formularioEnvio.isStepValid}
                  >
                    {i18n.t("txt_continuar")}
                  </button>
                )}
              </div>
            </div>
          </form>
        </Formiz>
      </div>
    </>
  );
};
