import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";

export const Base = () => {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
};

/**
 *
 * NOTA: se configura el proyecto para el uso de REDUX, aunque la prueba no conlleva a priori su uso
 *
 *
 *
 *
 */
