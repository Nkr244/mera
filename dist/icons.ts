export type IconsId =
  | "blue-arrow-right"
  | "btn-close"
  | "btnMinus"
  | "btnPlus"
  | "catalogBurger"
  | "catalogBurgerBlue"
  | "close"
  | "gray-arrow-left"
  | "zip-error"
  | "zip";

export type IconsKey =
  | "BlueArrowRight"
  | "BtnClose"
  | "BtnMinus"
  | "BtnPlus"
  | "CatalogBurger"
  | "CatalogBurgerBlue"
  | "Close"
  | "GrayArrowLeft"
  | "ZipError"
  | "Zip";

export enum Icons {
  BlueArrowRight = "blue-arrow-right",
  BtnClose = "btn-close",
  BtnMinus = "btnMinus",
  BtnPlus = "btnPlus",
  CatalogBurger = "catalogBurger",
  CatalogBurgerBlue = "catalogBurgerBlue",
  Close = "close",
  GrayArrowLeft = "gray-arrow-left",
  ZipError = "zip-error",
  Zip = "zip",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.BlueArrowRight]: "61697",
  [Icons.BtnClose]: "61698",
  [Icons.BtnMinus]: "61699",
  [Icons.BtnPlus]: "61700",
  [Icons.CatalogBurger]: "61701",
  [Icons.CatalogBurgerBlue]: "61702",
  [Icons.Close]: "61703",
  [Icons.GrayArrowLeft]: "61704",
  [Icons.ZipError]: "61705",
  [Icons.Zip]: "61706",
};
