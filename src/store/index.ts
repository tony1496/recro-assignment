import { combineReducers } from "redux";

import dashboardReducer from "./dashboard/reducer";

export default combineReducers({
  dashboard: dashboardReducer
});
