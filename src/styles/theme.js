/**
 * Theme object to be passed to the ThemeProvider component of the theme-ui npm package.
 * This can be used in other libraries and applications for increased interoperability.
 *
 * See styles.root for styles applied to the <html> and <body> elements. Notice that we specify
 * 1px font-size on styles.root (<html> element) so that we can utilize 1px based rem units.
 *
 * @see {@link https://www.theme-ui.com/theme-spec}
 */
const theme = {
  // Layout and Spacing

  breakpoints: [
    '40em', '@media (min-width: 56em) and (orientation: landscape)', '64em',
  ],
  sizes: {
    container: '1420rem',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  // Fonts

  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    '12rem', '14rem', '16rem', '20rem', '24rem', '28rem', '32rem', '48rem', '64rem',
  ],
  fontWeights: {
    body: 400,
    bold: 700,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  text: {
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      color: 'text',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      color: 'primary',
    },
    sectionHeading: {
      display: 'block',
      textAlign: 'center',
      fontFamily: '"MarckScript", Ariel',
      fontSize: 6,
      py: 5,
    },
  },

  // Colors

  initialColorModeName: 'dark',
  colors: {
    background: '#222739',
    text: '#F0F5F9',
    textContrast1: '#ddd',
    textContrast2: '#aaaebc',
    primary: '#546CBB',
    primaryLight: '#ceadff',
    primaryDark: '#6550cb',
    secondary: '#ffbff4',
    secondaryLight: '#fff2ff',
    secondaryDark: '#cb8ec1',
    secondaryText: '#fff',
    accent: '#6699CC',
    highlight: 'hsl(260, 20%, 40%)',
    muted: 'hsla(230, 20%, 0%, 20%)',

    // to update
    frame: '#fafafb',
    frameText: '#233143',

    // SVGs
    svgGitLogo: '#fff',
    svgGitText: '#fff',
    svgNextJs: '#fff',
    svgNodeJs: '#fff',

    modes: {
      light: {
        background: '#fff',
        text: '#001011',
        textContrast1: '#bebebe',
        textContrast2: '#ddd',
        primary: '#2C363F',
        primaryLight: '#9BA3AA',
        primaryDark: '#484B4E',
        primaryText: '#4e5b67',
        // lilacs
        // primaryLight: '#fbc3ff',
        // primaryDark: '#9563ae',
        // primaryText: '#4e1a57',
        secondary: '#76ddff',
        secondaryLight: '#acffff',
        secondaryDark: '#3babcc',
        secondaryText: '#a3ef9f',
        accent: '#4e1a57',
        highlight: '#D1FFC0',
        muted: 'grey',

        // to update
        frame: '#fafafb',
        frameText: '#233143',

        // SVGs
        svgGitLogo: '#2F2707',
        svgGitText: '#DE4C36',
        svgNextJs: '#000',
        svgNodeJs: '#333',
      },
      // mint: {
      //   background: '#DFECEB',
      //   text: '#002629',
      //   primary: '#4A5859',
      //   secondary: '#E9E9E9',
      //   accent: '#FAE6C6',
      //   highlight: '#FAE6C6',
      //   muted: 'grey',
      // },
    },
  },

  // Styles

  styles: {
    root: {
      fontSize: '1px', /* for using REM units */
      scrollBehavior: 'smooth',
      transition: 'background 500ms',

      body: {
        variant: 'text.body',
        fontSize: 1,
      },
    },

    h1: {
      variant: 'text.heading',
      fontSize: [5, 6, 6],
    },
    h2: {
      variant: 'text.heading',
      fontSize: [4, 5, 5],
    },
    h3: {
      variant: 'text.body',
      fontSize: [4, 5, 5],
    },
    h4: {
      variant: 'text.body',
      fontSize: [2, 3, 4],
    },
    h5: {
      variant: 'text.body',
      fontSize: 2,
    },
    h6: {
      variant: 'text.body',
      fontSize: 1,
    },
    p: {
      fontSize: 2,
    },
  },

  // Variants

  buttons: {
    borderRadius: '4px',

    // IconButton Component
    icon: {
      padding: 1,
      // height: '46px',
      // width: '46px',
      borderRadius: '46px',
      transition: 'background-color 150ms, box-shadow 150ms',
      boxShadow: '0px 0px 10px transparent',

      svg: {
        height: '32px',
        width: '32px',

        path: {
          transition: 'fill 0.3s',
        },
      },

      primary: {
        '&:hover': {
          boxShadow: (t) => `0px 0px 10px ${t.colors.primary}`,

          path: {
            fill: 'primaryDark',
          },
        },

        path: {
          fill: 'primary',
        },
      },

      secondary: {
        '&:hover': {
          boxShadow: (t) => `0px 0px 10px ${t.colors.secondary}`,

          path: {
            fill: 'secondaryDark',
          },
        },

        path: {
          fill: 'secondary',
        },
      },

      small: {
        svg: {
          height: '18px',
          width: '18px',
        },
        path: {
          fill: 'text',
        },
      },
    },
  },

  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      transition: 'box-shadow 0.3s',
      borderColor: 'gray',

      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    textarea: {
      transition: 'box-shadow 0.3s',
      borderColor: 'gray',

      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
  },

  images: {
    tech: {
      height: 48,
    },
  },
};

export default theme;
