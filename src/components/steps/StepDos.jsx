import React from "react";
import { Campos } from "./Campos";
import { isMaxLength, isPattern } from "@formiz/validations";
import { PasswordField } from "./PasswordField";
import { useForm } from "@formiz/core";
import { Pestanyas } from "./Pestanyas";
import i18n from "../../i18n";

export const StepDos = (stepvigente) => {
  const formularioEnvio = useForm();
  return (
    <>
      <Pestanyas stepvigente={stepvigente} />
      <div className="row">
        <div className="col-12 backactivo altura__minima">
          <div className="row m-4">
            <div className="col-12  pt-2">
              <h5>{i18n.t("txt_crea_tu_password")}</h5>
              <p className="parrafo">{i18n.t("txt_rellena_tu_contras")}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="row m-4">
                <div className="col-12">
                  <div className="row">
                    <div className="col-md-6">
                      <PasswordField
                        name="password"
                        label={i18n.t("txt_crea_tu_password")}
                        required={i18n.t("txt_debe_informar_pass")}
                        validations={[
                          {
                            rule: isPattern(
                              "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,24}$"
                            ),
                            message: i18n.t("txt_contener_minimo"),
                          },
                        ]}
                      />
                    </div>
                    <div className="col-md-6">
                      <PasswordField
                        name="password2"
                        label={i18n.t("txt_confirma_pass")}
                        required={i18n.t("txt_debe_informar_pass")}
                        validations={[
                          {
                            rule: isPattern(
                              "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,24}$"
                            ),
                            message: i18n.t("txt_contener_minimo"),
                          },
                          {
                            rule: (value) =>
                              formularioEnvio.values.password === value,
                            deps: [formularioEnvio.values.password],
                            message: i18n.t("txt_pass_no_coincide"),
                          },
                        ]}
                      />
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-12 ">
                      <small>{i18n.t("txt_disclaimer_max_chars")}</small>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-12 mt-5">
                      <Campos
                        name="frasepass"
                        label={i18n.t("txt_crea_tu_pista")}
                        validations={[
                          {
                            rule: isMaxLength(255),
                            message: i18n.t("txt_la_frase_no_superar"),
                          },
                        ]}
                      />
                      <small>{i18n.t("txt_disclaimer_max_255")}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
