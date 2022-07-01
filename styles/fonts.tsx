import { Global } from "@emotion/react";

export default function Fonts(): JSX.Element {
  return (
    <Global
      styles={`
                    @font-face {
                        font-family: 'Source Code Pro';
                        font-style: normal;
                        font-weight: 400;
                        font-display: swap;
                        src: url('/fonts/source-code-pro.woff2') format('woff2'),
                            url('/fonts/source-code-pro.woff') format('woff');
                    }

                `}
    />
  );
}
