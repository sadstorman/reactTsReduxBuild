import { Navigation } from "./router/Navigation";

import ThemeProvider from "./theme";

export const App = () => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}
