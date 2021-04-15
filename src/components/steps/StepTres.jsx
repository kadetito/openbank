import React, { useEffect } from "react";

import { Check } from "@material-ui/icons/";
import { useForm } from "@formiz/core";
import { Pestanyas } from "./Pestanyas";
import i18n from "../../i18n";

import { useDispatch, useSelector } from "react-redux";
import { submitFormAction } from "../stepsReducerDuck";

export const StepTres = (stepvigente) => {
  const formularioEnvio = useForm();
  const enviodatos = formularioEnvio.values;

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => {
      dispatch(submitFormAction(enviodatos));
    };
    fetchData();
  }, [dispatch]);

  //get resultado
  const selectResultado = useSelector((store) => store.reducersteps.result);

  return selectResultado ? (
    <>
      <Pestanyas stepvigente={stepvigente} />
      <div className="row">
        <div className="col-12 backactivo altura__minima">
          <div className="row  m-5">
            <div className="col-12 m-5 text-center d-flex flex-row">
              {selectResultado.status === 200 ? (
                <>
                  <div className="roundcircle-verde">
                    <Check />
                  </div>
                  <h2 className="h2__exito">{i18n.t("txt_exito_operacion")}</h2>
                </>
              ) : (
                <>
                  <div className="roundcircle-rojo">
                    <Check />
                  </div>
                  <h2 className="h2__fracaso">
                    {i18n.t("txt_ha_habido_error")}
                  </h2>
                </>
              )}
            </div>
          </div>
          <div className="row m-3">
            <div className="col-12 text-center ">
              {selectResultado.status === 200 ? (
                <>
                  <p>{i18n.t("txt_posible_operacion")}</p>
                </>
              ) : (
                <>
                  <p>{i18n.t("txt_noposible_operacion")}</p>
                </>
              )}
            </div>
          </div>

          {selectResultado.status === 200 ? (
            <>
              <div className="row ">
                <div className="col-2"> </div>
                <div className="col-8 card codetext">
                  <p>
                    Datos recuperados del store, cambiar el estado de state a
                    401 en el archivo stepsReducer para forzar error
                  </p>
                  <pre>{JSON.stringify(selectResultado, undefined, 2)}</pre>
                </div>
                <div className="col-2"> </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  ) : null;
};
