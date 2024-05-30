import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/montserrat";

const fonts = {
  fonts: {
    heading: `'Montserrat Variable', sans-serif`,
    body: `'Montserrat Variable', sans-serif`,
  },
};

const colors = {
  primary: {
    900: "#2FB95D",
  },
  secondary: {
    900: "#043A3A",
  },
  text: {
    primary: "#1E1E1E",
    secondary: "#525252",
    tertiary: "#D3D3D3",
    primaryWithOpacity: "#2FB95D08",
    primaryWithLessOpacity: "#2FB95D10"
  },
  gradients: {
    customGradient:
      "linear-gradient(4deg, rgba(47,185,93,1) 15%, rgba(4,58,58,1) 83%, rgba(4,58,58,1) 100%)",
    customGradientReverse:
      "linear-gradient(196deg, rgba(47,185,93,1) 15%, rgba(4,58,58,1) 83%, rgba(4,58,58,1) 100%)",
  },
};

const customTheme = extendTheme({ colors, fonts });

export default customTheme;
