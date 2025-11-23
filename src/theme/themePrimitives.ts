export const brand = {
  50: 'hsl(340, 82%, 96%)',
  100: 'hsl(18, 94%, 80%)',
  200: 'hsl(351, 68%, 76%)',
  300: 'hsl(350, 66%, 67%)',
  400: 'hsl(350, 83%, 62%)',
  500: 'hsl(350, 92%, 58%)',
  600: 'hsl(348, 78%, 53%)',
  700: 'hsl(348, 73%, 48%)',
  800: 'hsl(348, 78%, 43%)',
  900: 'hsl(353, 96%, 35%)',
};

export const secondary = {
    50: 'hsl(56, 85%, 96%)',
    100: 'hsl(55, 92%, 88%)',
    200: 'hsl(54, 87%, 82%)',
    300: 'hsl(54, 85%, 74%)',
    400: 'hsl(53, 86%, 66%)',
    500: 'hsl(53, 86%, 60%)',
    600: 'hsl(48, 85%, 58%)',
    700: 'hsl(42, 83%, 57%)',
    800: 'hsl(36, 80%, 55%)',
    900: 'hsl(27, 77%, 51%)',
};


export const colorSchemes = {
  light: {
    palette: {
        primary: {
            main: brand[700],
        },
        secondary: {
            main: secondary[600],
        }
    }
  },
  dark: {
      palette: {
          primary: {
              main: brand[900],
          },
          secondary: {
              main: secondary[900],
          }
      },
  }
};

export const typography = {
  fontFamily: 'open-sans, Inter, sans-serif',
};

export const shape = {
  borderRadius: 4,
};

