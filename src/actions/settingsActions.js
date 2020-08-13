import {
  ALLOW_REGISTRASTION,
  DISABLE_BALANCE_ON_EDIT,
  DISABLE_BALANCE_ON_ADD,
} from "./types";

export const setDisableBalanceOnAdd = () => {
  //get settings from localStrage
  const settings = JSON.parse(localStorage.getItem("settings"));
  //toggle
  settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;
  //set back to localStorage
  localStorage.setItem("settings", JSON.stringify(settings));
  return {
    type: DISABLE_BALANCE_ON_ADD,
    payload: settings.disableBalanceOnAdd,
  };
};
export const setDisableBalanceOnEdit = () => {
  //get settings from localStrage
  const settings = JSON.parse(localStorage.getItem("settings"));
  //toggle
  settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;
  //set back to localStorage
  localStorage.setItem("settings", JSON.stringify(settings));
  return {
    type: DISABLE_BALANCE_ON_EDIT,
    payload: settings.disableBalanceOnEdit,
  };
};
export const setAllowRegistration = () => {
  //get settings from localStrage
  const settings = JSON.parse(localStorage.getItem("settings"));
  //toggle
  settings.allowRegistration = !settings.allowRegistration;
  //set back to localStorage
  localStorage.setItem("settings", JSON.stringify(settings));
  return {
    type: ALLOW_REGISTRASTION,
    payload: settings.allowRegistration,
  };
};
