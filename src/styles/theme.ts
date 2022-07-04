import { createTheme } from "@mui/material";

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
    h3: false;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
  interface Theme {
    background: {
      color: string;
    };
    status: {
      danger: string;
    };
    padding: {
      small: string;
      default: string;
      large: string;
    };
    colors: {
      text: string;
      background: string;
      primary: string;
      secondary: string;
      tertiary: string;
      light?: string;
      lighter?: string;
      white?: string;
      dark?: string;
      error?: string;
      warning?: string;
      success?: string;
      black?: string;
      neutral6: string;
      neutral5: string;
      neutral4: string;
      neutral3: string;
      neutral2: string;
      neutral1: string;
    };
    fonts: {
      body: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
      };
      bodyBold: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    overrides: {}
    background: {
      color?: string;
    };
    status?: {
      danger?: any;
    };
    padding?: {
      small?: string;
      default?: string;
      large?: string;
    };
    colors?: {
      text?: string;
      background?: string;
      primary?: string;
      secondary?: string;
      tertiary?: string;
      light?: string;
      lighter?: string;
      white?: string;
      dark?: string;
      error?: string;
      success?: string;
      warning?: string;
      black?: string;
      neutral6: string;
      neutral5: string;
      neutral4: string;
      neutral3: string;
      neutral2: string;
      neutral1: string;
    };
    fonts: {
      body: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
      };
      bodyBold: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
      };
    };
  }

  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

export const theme = createTheme({
  overrides: {
    MuiButton: {
      root: {                
        "&:not($sizeLarge):not($sizeSmall) $label": {
          height: '38px',
          // font: "normal normal 500 0.875rem/1.6875rem ",
        }
      },
      sizeLarge: {
        "& $label": {
          // font: "normal normal 500 0.9375rem/1.6875rem",
        }
      },
      sizeSmall: {
        "& $label": {
          // font: "normal normal 500 0.8125rem/1.6875rem Open Sans"
        }
      }
    }
  },
  palette: {
    primary: {
      main: "#FF0053",
      dark: "#F8407C",
      light: "#F8407C",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
  background: {
    color: "#222",
  },
  colors: {
    // Brand Primary
    secondary: "#fff",
    tertiary: "#1AD24E",
    text: "#fff",
    background: "#FF0053",
    primary: "#FF0053",
    light: "#edeff1",
    lighter: "#F2F4FF",
    // Neutral
    white: "#FCFCFD",
    error: "#D21A1A",
    success: "#1AD24E",
    warning: "#FFA800",
    // Accent Base
    neutral6: "#353641",
    neutral5: "#6E7187",
    neutral4: "#B4B5C1",
    neutral3: "#D9D9D9",
    neutral2: "#EBECEF",
    neutral1: "#F7F7F8",
  },
  fonts: {
    body: {
      fontFamily: "sarjeta body",
      fontSize: "1.8rem",
      lineHeight: "1.125rem",
    },
    bodyBold: {
      fontFamily: "sarjeta bold",
      fontSize: "2.2rem",
      lineHeight: "1.125.rem",
    },
  },
  padding: {
    small: ".7rem",
    default: "1.25rem",
    large: "1.5",
  },
  typography: {
    allVariants: {
      textTransform: "inherit",
    },  
    h1: {
      fontFamily: "sarjeta old",
      fontSize: "8rem",
      lineHeight: "1em",
    },
    h2: {
      fontFamily: "sarjeta bold",
      fontSize: "5rem",
      lineHeight: "4rem",
    },
    h3: {
      fontSize: "2rem",
      lineHeight: "1.875rem",
    },
    h4: {
      fontSize: "1.25rem",
      lineHeight: "2rem",
    },
    h5: {
      fontSize: "1rem",
      lineHeight: "1.29rem",
    },
    h6: {
      fontSize: "1.25rem",
      lineHeight: "1.25",
    },
  },
});
