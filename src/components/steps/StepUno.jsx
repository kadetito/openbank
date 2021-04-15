import React from "react";
import { CheckboxField } from "./CheckboxField";

import { Pestanyas } from "./Pestanyas";

export const StepUno = (stepvigente) => {
  return (
    <>
      <Pestanyas stepvigente={stepvigente} />

      <div className="row">
        <div className="col-12 backactivo altura__minima">
          <div className="row m-4">
            <div className="col-12  pt-2">
              <h5>Bienvenido a la</h5>
              <h2>Cuenta Corriente OpenClose</h2>
              <ol className="mt-4">
                <li className="list-item">
                  Crea tu password, para ello indícanos que eres mayor de edad
                </li>
                <li className="list-item">
                  Ingresa los datos que te solicitamos en el siguiente paso
                </li>
                <li className="list-item">
                  Confirma tus datos y envíanoslos, procederemos a crea tu
                  espacio
                </li>
              </ol>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="row m-4">
                <div className="col-12">
                  <h6 className="borderbottom">
                    Para seguir avanzando debes ser mayor de edad.
                  </h6>
                  <div className="row">
                    <div className="col-12">
                      <CheckboxField
                        name="mayoredad"
                        label="Soy mayor de edad y acepto los"
                        required="Para continuar, debe marcar la casilla de verificación de edad"
                      />
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
