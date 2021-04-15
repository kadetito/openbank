import React from "react";
import { VpnKeyOutlined, Lock, Check } from "@material-ui/icons/";
import i18n from "../../i18n";

export const Pestanyas = (stepvigent) => {
  const { stepvigente } = stepvigent;

  return (
    <div className="row">
      <div
        className={
          stepvigente.stepvigente === "step1"
            ? "col-4 p-4 backactivo"
            : "col-4 p-4"
        }
      >
        <div className="d-flex flex-nowrap">
          <div>
            <div
              className={
                stepvigente.stepvigente === "step1"
                  ? "roundcircle-activo"
                  : "roundcircle-inactivo"
              }
            >
              <VpnKeyOutlined />
            </div>
          </div>
          <div>
            <h3>{i18n.t("txt_obten_tu_identidad")}</h3>
          </div>
        </div>
      </div>
      <div
        className={
          stepvigente.stepvigente === "step2"
            ? "col-4 p-4 backactivo"
            : "col-4 p-4"
        }
      >
        <div className="d-flex flex-nowrap">
          <div>
            <div
              className={
                stepvigente.stepvigente === "step2"
                  ? "roundcircle-activo"
                  : "roundcircle-inactivo"
              }
            >
              <Lock />
            </div>
          </div>
          <div>
            <h3>{i18n.t("txt_crea_tu_password")}</h3>
          </div>
        </div>
      </div>
      <div
        className={
          stepvigente.stepvigente === "step3"
            ? "col-4 p-4 backactivo"
            : "col-4 p-4"
        }
      >
        <div className="d-flex flex-nowrap">
          <div>
            <div
              className={
                stepvigente.stepvigente === "step3"
                  ? "roundcircle-activo"
                  : "roundcircle-inactivo"
              }
            >
              <Check />
            </div>
          </div>
          <div>
            <h3>{i18n.t("txt_confirmacion")}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
