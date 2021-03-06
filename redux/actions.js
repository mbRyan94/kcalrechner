import {
  ADD_AGE,
  ADD_ACTIVITY_LEVEL,
  ADD_WEIGHT,
  ADD_HEIGHT,
  ADD_GENDER,
  ADD_ACTIVE_KCAL,
  ADD_BASE_KCAL,
} from "./actions-types";

export const addWeight = (weight) => {
  console.log("action weight param: ", weight);
  return {
    type: ADD_WEIGHT,
    payload: weight,
  };
};

export const addAge = (age) => {
  console.log("action age param: ", age);
  return {
    type: ADD_AGE,
    payload: age,
  };
};

export const addHeight = (height) => {
  console.log("action height param: ", height);
  return {
    type: ADD_HEIGHT,
    payload: height,
  };
};

export const addActivityLevel = (activityLevel) => {
  console.log("action activityLevel param: ", activityLevel);
  return {
    type: ADD_ACTIVITY_LEVEL,
    payload: activityLevel,
  };
};

export const addGender = (gender) => {
  console.log("action gender param: ", gender);
  return {
    type: ADD_GENDER,
    payload: gender,
  };
};

export const addActiveKcal = (activeKcal) => {
  console.log("action activeKcal param: ", activeKcal);
  return {
    type: ADD_ACTIVE_KCAL,
    payload: activeKcal,
  };
};

export const addBaseKcal = (baseKcal) => {
  console.log("action baseKcal param: ", baseKcal);
  return {
    type: ADD_BASE_KCAL,
    payload: baseKcal,
  };
};
