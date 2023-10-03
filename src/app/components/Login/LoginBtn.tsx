import { Dispatch, SetStateAction } from "react";

const LoginBtn = ({
  onClick,
}: {
  onClick: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => onClick(true)}
      className="px-2 text-white transition-all duration-300 bg-blue-500 border-2 border-blue-800 rounded-full w-fit btn hover:bg-blue-400"
    >
      Login
    </button>
  );
};

export default LoginBtn;
