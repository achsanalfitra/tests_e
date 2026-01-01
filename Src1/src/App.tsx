import { AppContextTheme, AppContextThemeNew } from "./AppContext/AppContextTheme";
import { AppLayout } from "./AppLib/Component/Layout/Layout";
import { AppViewFormSelectPage } from "./AppLib/View/FormSelectPage/FormSelectPage";

function App() {
  /*setup providers start */
  AppContextThemeNew('light');
  /*setup providers end */

  const scaffoldFormSelectPage = <AppViewFormSelectPage />;

  return (
    <AppContextTheme>
      <AppLayout children={scaffoldFormSelectPage} />
    </AppContextTheme>
  );
}

export default App;
