export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative bg-container">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
