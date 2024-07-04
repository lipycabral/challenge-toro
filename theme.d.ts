import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    padding: string;
    palette: {
      primary: string;
      white: string;
      grey: string;
      blueAtoll: string;
      casper: string;
      up: string;
      down: string;
    };
  }
}
