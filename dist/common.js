"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonStore = void 0;
var _zustand = require("zustand");
/* eslint-disable consistent-return */

var commonStore = exports.commonStore = (0, _zustand.create)(function (set) {
  return {
    setLoading: function setLoading(state) {
      set({
        show: state.show,
        icon: state.icon
      });
    }
  };
});