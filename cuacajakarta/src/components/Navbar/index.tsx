import { CodeIcon } from "../../assets";

export const Navbar = () => {
  return (
    <nav className="flex min-w-full p-4 justify-between items-center">
      <a href="/" aria-label="logo">
        <p className="font-black tracking-tighter text-2xl text-gray-600 underline decoration-sky-500 hover:text-gray-800 hover:decoration-sky-400 hover:transition hover:ease-in-out">
          cuaca jakarta
        </p>
      </a>
      <a href="#">
        <CodeIcon className="w-8 h-8 hover:text-sky-500 hover:transition hover:ease-in-out" />
      </a>
    </nav>
  );
};
