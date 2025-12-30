import { useContext } from 'react';
import './Layout.module.style.css';
import { AppContextThemeComponent } from '../../../AppContext/AppContextTheme';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const theme = useContext(AppContextThemeComponent);
 return (
    <div className="app-layout" style={{ 
      backgroundColor: theme.backgroundColor, 
      color: theme.color,
      minHeight: '100vh' 
    }}>
      <main>
        {children}
      </main>
    </div>
  );
}