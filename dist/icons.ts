export type IconsId =
  | "404"
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
  | "mdi_eye"
  | "trash"
  | "user-profile-group-filled"
  | "users-profiles"
  | "zip-error"
  | "zip";

export type IconsKey =
  | "i404"
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
  | "MdiEye"
  | "Trash"
  | "UserProfileGroupFilled"
  | "UsersProfiles"
  | "ZipError"
  | "Zip";

export enum Icons {
  i404 = "404",
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
  MdiEye = "mdi_eye",
  Trash = "trash",
  UserProfileGroupFilled = "user-profile-group-filled",
  UsersProfiles = "users-profiles",
  ZipError = "zip-error",
  Zip = "zip",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.i404]: "61697",
  [Icons.AlertCircleFill]: "61698",
  [Icons.ArrowDown]: "61699",
  [Icons.ArrowUp]: "61700",
  [Icons.BlueArrowRight]: "61701",
  [Icons.BtnClose]: "61702",
  [Icons.BtnMinus]: "61703",
  [Icons.BtnPlus]: "61704",
  [Icons.CatalogBurger]: "61705",
  [Icons.CatalogBurgerBlue]: "61706",
  [Icons.Checkbox]: "61707",
  [Icons.CloseLarge]: "61708",
  [Icons.Close]: "61709",
  [Icons.DownloadOutline]: "61710",
  [Icons.EditContained]: "61711",
  [Icons.EmailFilled]: "61712",
  [Icons.EyeClosedFilled]: "61713",
  [Icons.EyeOpenFilled]: "61714",
  [Icons.GrayArrowLeft]: "61715",
  [Icons.MdiEye]: "61716",
  [Icons.Trash]: "61717",
  [Icons.UserProfileGroupFilled]: "61718",
  [Icons.UsersProfiles]: "61719",
  [Icons.ZipError]: "61720",
  [Icons.Zip]: "61721",
};
