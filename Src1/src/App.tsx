import { AppContextTheme, AppContextThemeNew } from "./AppContext/AppContextTheme";
import { AppButton } from "./AppLib/Component/Button/Button";
import { AppCheckbox } from "./AppLib/Component/Checkox/Checkbox";
import { AppItemSelectPage } from "./AppLib/Component/ItemSelectPage/ItemSelectPage";
import { AppLayout } from "./AppLib/Component/Layout/Layout";

function App() {
  /*setup providers start */
  AppContextThemeNew('light');
  /*setup providers end */

  const scaffoldButton = <AppButton />;
  const scaffoldCheckbox = <AppCheckbox />;
  const scaffoldItemSelectPage = <AppItemSelectPage />;

  return (
    <AppContextTheme>
      <AppLayout children={scaffoldItemSelectPage} />
    </AppContextTheme>
  );
}

export default App;
