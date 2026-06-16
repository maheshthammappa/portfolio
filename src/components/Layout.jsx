import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="container mx-auto px-6 py-10">
        {children}
      </main>

      <footer className="text-center py-6 border-t border-slate-800">
        <p>© 2026 Mahesh. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;