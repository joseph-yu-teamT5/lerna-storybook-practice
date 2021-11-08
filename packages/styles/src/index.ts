import 'normalize.css'
import { injectGlobal } from '@emotion/css'
import colors from './colors'

injectGlobal`
  * {
    box-sizing: border-box;
    scrollbar-width: thin;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.alabaster};
    font-size: 12px;
  }

  button {
    margin: 0;
    padding: 0;
    background-color: ${colors.alabaster};
    &:focus {
      outline: none;
    }
  }

  a {
    color: unset;
    text-decoration: none;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 22px;
  }

  h5 {
    font-size: 20px;
  }

  h6 {
    font-size: 16px;
  }

  loading-mask.expanded {
    transform: translateX(500%);
  }

  .invisible {
    visibility: hidden;
  }

  .grecaptcha-badge {
    visibility: hidden;
  }
`
