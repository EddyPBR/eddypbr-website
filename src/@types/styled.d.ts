import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryDark: string;
      primary: string;
      primaryLight: string;

      secondaryDark: string;
      secondary: string;
      secondaryLight: string;

      headingDark: string;
      heading: string;
      headingLight: string;

      background: string;
    },
    fonts: {
      title: string;
      subtitle: string;
      text: string;
      bold: string;
    },
  }
}
