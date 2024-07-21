import {DefaultTheme, DarkTheme, ExtendedTheme} from '@react-navigation/native';

// Override the theme in react native navigation to accept our custom theme props.
declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      primary: string;
      primary_opacity: string;
      white: string;
      black: string;
      light_blue: string;
      dark_blue: string;
      background: string;
      light_grey: string;
      grey: string;
      dark_grey: string;
      green: string;
      yellow: string;
      card_light_grey: string;
      text: string;
      red_text: string;
      grey_text: string;
      secondary_button_bk: string;
      secondary_button_border: string;
      tertiary_button_bk: string;
      tertiary_button_border: string;
      input_border: string;
      input_focused_border: string;
      input_error_bk: string;
      checkbox_border: string;
      tracker_item_background: string;
      tracker_not_started: string;
      price_background: string;
      slate_blue: string;
      slate_blue_opacity: string;
      card_grey: string;
      text_grey_new: string;
      horzLine: string;
      warning_text: string;
      pink: string;
      pinkOpracity: string;
      card: string;
      border: string;
      notification: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}

const lightTheme: ExtendedTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF372D',
    pink: '#FDC9C4',
    pinkOpracity: '#FDC9C460',
    primary_opacity: '#e9140a33',
    white: '#FFFFFF',
    black: '#000000',
    light_blue: '#F6F7FD',
    dark_blue: '#376174',
    background: '#FFFFFF',
    light_grey: '#E6EAF0',
    grey: '#4A4A4A',
    dark_grey: '#424242',
    green: '#32B65F',
    yellow: '#FFF5D9',
    card_light_grey: '#F4F7FB',
    slate_blue: '#551EE6',
    slate_blue_opacity: '#DADFF7',
    // card_grey: "#EEEEF3",
    card_grey: '#F2F2F2',
    text_grey_new: '#646464',
    horzLine: '#E2E6EB',

    // text
    text: '#000000',
    red_text: '#DF2D1E',
    grey_text: '#A6A6A6',
    warning_text: '#DC8600',

    // button
    secondary_button_bk: '#F0F4F8',
    secondary_button_border: '#D3D3D3',
    tertiary_button_bk: '#FFFFFF',
    tertiary_button_border: '#767676',

    // input
    input_border: '#9EA8B5',
    input_focused_border: '#6294AB',
    input_error_bk: '#FEEFED',

    // checkbox
    checkbox_border: '#B2BBC9',

    // tracker:
    tracker_item_background: '#FFF9E7',
    tracker_not_started: '#979797',

    // price background
    price_background: '#D6ECF680',
    card: '#ffffff',
    border: '#dee2e6',
    notification: '#ffc107',
  },
};

const darkTheme: ExtendedTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: '#E9140A',
    pink: '#FDC9C4',
    pinkOpracity: '#FDC9C460',
    primary_opacity: '#e9140a33',
    white: '#000000',
    black: '#FFFFFF',
    light_blue: '#F6F7FD',
    dark_blue: '#376174',
    background: '#000000',
    light_grey: '#E6EAF0',
    grey: '#4A4A4A',
    dark_grey: '#424242',
    green: '#32B65F',
    yellow: '#FFF5D9',
    card_light_grey: '#F4F7FB',
    slate_blue: '#551EE6',
    slate_blue_opacity: '#DADFF7',
    card_grey: '#EEEEF3',
    text_grey_new: '#646464',
    horzLine: '#E2E6EB',

    // text
    text: '#000000',
    red_text: '#DF2D1E',
    grey_text: '#A6A6A6',
    warning_text: '#DC8600',

    // button
    secondary_button_bk: '#F0F4F8',
    secondary_button_border: '#D3D3D3',
    tertiary_button_bk: '#FFFFFF',
    tertiary_button_border: '#767676',

    // input
    input_border: '#9EA8B5',
    input_focused_border: '#6294AB',
    input_error_bk: '#FEEFED',

    // checkbox
    checkbox_border: '#B2BBC9',

    // tracker:
    tracker_item_background: '#FFF9E7',
    tracker_not_started: '#979797',

    // price background
    price_background: '#D6ECF680',
    card: '#000',
    border: '#dee2e6',
    notification: '#ffc107',
  },
};

export {lightTheme, darkTheme};
