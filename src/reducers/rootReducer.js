import { combineReducers } from "redux";
import reducerSteps from "../components/stepsReducerDuck";

export const rootReducer = combineReducers({
  reducersteps: reducerSteps,
});

/**
 * NOTA: como he mencionado antes los usables de redux se incluyen, en este caso un combinador de reducers
 *       para poder usar el método DUCK
 *
 *
 */
