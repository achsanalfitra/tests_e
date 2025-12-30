import { AppContextTheme, AppContextThemeNew } from "./AppContext/AppContextTheme";
import { AppButton } from "./AppLib/Component/Button/Button";
import { AppLayout } from "./AppLib/Component/Layout/Layout";

function App() {
  /*setup providers start */
  AppContextThemeNew('dark');
  /*setup providers end */

  const child = <AppButton />;
  return (
    <AppContextTheme>
      <AppLayout children={child} />
    </AppContextTheme>
  );
}

export default App;
