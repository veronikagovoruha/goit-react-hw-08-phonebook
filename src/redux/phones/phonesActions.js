import { createAction } from "@reduxjs/toolkit";

export const fetchPhonesRequest = createAction("phones/fetch/request");
export const fetchPhonesSuccess = createAction("phones/fetch/success");
export const fetchPhonesError = createAction("phones/fetch/error");

export const addPhonesRequest = createAction("phones/add/request");
export const addPhonesSuccess = createAction("phones/add/success");
export const addPhonesError = createAction("phones/add/error");

export const removePhonesRequest = createAction("phones/remove/request");
export const removePhonesSucces = createAction("phones/remove/success");
export const removePhonesError = createAction("phones/remove/error");