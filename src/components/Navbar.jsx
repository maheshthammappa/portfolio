import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Docs", path: "/docs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-cyan-400"
        >
          maheshthammappa.me
        </Link>

        <div className="flex gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 font-semibold"
                  : "hover:text-cyan-400 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;