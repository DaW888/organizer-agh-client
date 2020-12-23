import { createGlobalStyle } from 'styled-components';

// Nunito Fonts
import NunitoLight from '../../assets/fonts/Nunito/Nunito-Light.ttf'; //300
import NunitoLightItalic from '../../assets/fonts/Nunito/Nunito-LightItalic.ttf'; ///300
import NunitorRegular from '../../assets/fonts/Nunito/Nunito-Regular.ttf'; //400
import NunitorRegularItalic from '../../assets/fonts/Nunito/Nunito-Italic.ttf'; //400
import NunitoBold from '../../assets/fonts/Nunito/Nunito-Bold.ttf'; //700
import NunitoExtraBold from '../../assets/fonts/Nunito/Nunito-ExtraBold.ttf'; //800

// Open Sans Fonts
import OpenSansLight from '../../assets/fonts/OpenSans/OpenSans-Light.ttf'; //300
import OpenSansLightItalic from '../../assets/fonts/OpenSans/OpenSans-LightItalic.ttf'; ///300
import OpenSansRegular from '../../assets/fonts/OpenSans/OpenSans-Regular.ttf'; //400
import OpenSansRegularItalic from '../../assets/fonts/OpenSans/OpenSans-Italic.ttf'; //400
import OpenSansSemiBold from '../../assets/fonts/OpenSans/OpenSans-SemiBold.ttf'; //600
import OpenSansBold from '../../assets/fonts/OpenSans/OpenSans-Bold.ttf'; //700

// Proza Libre Fonts
import ProzaLibreRegular from '../../assets/fonts/ProzaLibre/ProzaLibre-Regular.ttf'; //400
import ProzaLibreBold from '../../assets/fonts/ProzaLibre/ProzaLibre-Bold.ttf'; ///500
import ProzaLibreSemiBold from '../../assets/fonts/ProzaLibre/ProzaLibre-SemiBold.ttf'; //600

export default createGlobalStyle`

  // Proza Libre
  @font-face {
    font-family: 'ProzaLibre';
    src: url(${ProzaLibreRegular}) format('ttf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'ProzaLibre';
    src: url(${ProzaLibreBold}) format('ttf');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'ProzaLibre';
    src: url(${ProzaLibreSemiBold}) format('ttf');
    font-weight: 600;
    font-style: normal;
  }

  // Nunito
  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoLight}) format('ttf');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoLightItalic}) format('ttf');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitorRegular}) format('ttf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitorRegularItalic}) format('ttf');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoBold}) format('ttf');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoExtraBold}) format('ttf');
    font-weight: 800;
    font-style: normal;
  }

  // Open Sans
  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSansLight}) format('ttf');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSansLightItalic}) format('ttf');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSansRegular}) format('ttf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSansRegularItalic}) format('ttf');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSansSemiBold}) format('ttf');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSansBold}) format('ttf');
    font-weight: 700;
    font-style: normal;
  }


  body {
    background-color: ${({ theme }) => theme.bgMainColor};
    margin: 0;
    padding: 0;
    font-family: OpenSans, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: ${({ theme }) => theme.transition};
    
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
