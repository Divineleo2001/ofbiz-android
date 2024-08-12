import { NAV_THEME } from "./constants";

export type Theme = {
    dark: boolean;
    colors: {
      primary: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
    };
  };

export const LIGHT_THEME: Theme = {
    dark: false,
    colors: NAV_THEME.light,
  };
 export  const DARK_THEME: Theme = {
    dark: true,
    colors: NAV_THEME.dark,
  };
  