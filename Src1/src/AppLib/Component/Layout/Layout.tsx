import './Layout.module.style.css';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="app-layout">
      <main>
        {children}
      </main>
    </div>
  );
}