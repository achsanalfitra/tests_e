import { AppContextTheme, AppContextThemeNew } from "./AppContext/AppContextTheme";
import { AppButton } from "./AppLib/Component/Button/Button";
import { AppCheckbox } from "./AppLib/Component/Checkox/Checkbox";
import { AppLayout } from "./AppLib/Component/Layout/Layout";

function App() {
  /*setup providers start */
  AppContextThemeNew('light');
  /*setup providers end */

  const scaffoldButton = <AppButton />;
  const scaffoldCheckbox = <AppCheckbox />;
  return (
    <AppContextTheme>
      <AppLayout children={scaffoldCheckbox} />
    </AppContextTheme>
  );
}

export default App;
