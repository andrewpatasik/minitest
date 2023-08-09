import { HeartIcon } from "../../assets";

export const Footer = () => {
  return (
    <footer className="flex justify-between p-4 mt-auto">
      <p className="block mx-auto sm:mx-0 sm:ml-auto">
        Made with{" "}
        <span className="inline-block align-middle">
          {<HeartIcon className="w-4 h-4 text-rose-700" />}
        </span>{" "}
        by andrew
      </p>
    </footer>
  );
};
