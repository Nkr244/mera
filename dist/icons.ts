export type IconsId =
  | "alert-circle-fill"
  | "arrow-down"
  | "arrow-up"
  | "blue-arrow-right"
  | "btn-close"
  | "btnMinus"
  | "btnPlus"
  | "catalogBurger"
  | "catalogBurgerBlue"
  | "checkbox"
  | "close-large"
  | "close"
  | "download-outline"
  | "edit-contained"
  | "email-filled"
  | "eye-closed-filled"
  | "eye-open-filled"
  | "gray-arrow-left"
  | "trash"
  | "user-profile-group-filled"
  | "users-profiles"
  | "zip-error"
  | "zip";

export type IconsKey =
  | "AlertCircleFill"
  | "ArrowDown"
  | "ArrowUp"
  | "BlueArrowRight"
  | "BtnClose"
  | "BtnMinus"
  | "BtnPlus"
  | "CatalogBurger"
  | "CatalogBurgerBlue"
  | "Checkbox"
  | "CloseLarge"
  | "Close"
  | "DownloadOutline"
  | "EditContained"
  | "EmailFilled"
  | "EyeClosedFilled"
  | "EyeOpenFilled"
  | "GrayArrowLeft"
  | "Trash"
  | "UserProfileGroupFilled"
  | "UsersProfiles"
  | "ZipError"
  | "Zip";

export enum Icons {
  AlertCircleFill = "alert-circle-fill",
  ArrowDown = "arrow-down",
  ArrowUp = "arrow-up",
  BlueArrowRight = "blue-arrow-right",
  BtnClose = "btn-close",
  BtnMinus = "btnMinus",
  BtnPlus = "btnPlus",
  CatalogBurger = "catalogBurger",
  CatalogBurgerBlue = "catalogBurgerBlue",
  Checkbox = "checkbox",
  CloseLarge = "close-large",
  Close = "close",
  DownloadOutline = "download-outline",
  EditContained = "edit-contained",
  EmailFilled = "email-filled",
  EyeClosedFilled = "eye-closed-filled",
  EyeOpenFilled = "eye-open-filled",
  GrayArrowLeft = "gray-arrow-left",
  Trash = "trash",
  UserProfileGroupFilled = "user-profile-group-filled",
  UsersProfiles = "users-profiles",
  ZipError = "zip-error",
  Zip = "zip",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.AlertCircleFill]: "61697",
  [Icons.ArrowDown]: "61698",
  [Icons.ArrowUp]: "61699",
  [Icons.BlueArrowRight]: "61700",
  [Icons.BtnClose]: "61701",
  [Icons.BtnMinus]: "61702",
  [Icons.BtnPlus]: "61703",
  [Icons.CatalogBurger]: "61704",
  [Icons.CatalogBurgerBlue]: "61705",
  [Icons.Checkbox]: "61706",
  [Icons.CloseLarge]: "61707",
  [Icons.Close]: "61708",
  [Icons.DownloadOutline]: "61709",
  [Icons.EditContained]: "61710",
  [Icons.EmailFilled]: "61711",
  [Icons.EyeClosedFilled]: "61712",
  [Icons.EyeOpenFilled]: "61713",
  [Icons.GrayArrowLeft]: "61714",
  [Icons.Trash]: "61715",
  [Icons.UserProfileGroupFilled]: "61716",
  [Icons.UsersProfiles]: "61717",
  [Icons.ZipError]: "61718",
  [Icons.Zip]: "61719",
};
