//import axios from "axios";

/**
 *
 * Método Redux Duck (Pato)
 * se concentran en un solo archivo constantes, types, reducers
 * y actions para mejorar significativamente el orden
 *
 *
 */

const dataInicial = {
  evento: [],
  selectedGrupo: 0,
  lista: [],
};

/**
 * TYPES
 */
const MOVER_DATOS_SUBMIT = "MOVER_DATOS_SUBMIT";

/**
 * REDUCERS
 * lee las acciones y actuan en consecuencia al type enviado
 */
export default function reducerSteps(state = dataInicial, action) {
  switch (action.type) {
    case MOVER_DATOS_SUBMIT:
      return { ...state, result: action.payload };
    default:
      return state;
  }
}

/**
 * ACCIONES
 * dispatch activa el reducer
 * getState obtiene el estado inicial o el que se esté devolviendo
 * ==================================================================================================
 */

export const submitFormAction = (resultado) => async (dispatch, getState) => {
  try {
    const body = await resultado;

    dispatch({
      type: MOVER_DATOS_SUBMIT,
      payload: {
        mayoredad: body.mayoredad,
        password: body.password,
        password2: body.password2,
        frasepass: body.frasepass,
        status: 200, //cambiar por 401, 404 o 500 para forzar el fallo
      },
    });
  } catch (error) {
    console.log(error);
  }
};
