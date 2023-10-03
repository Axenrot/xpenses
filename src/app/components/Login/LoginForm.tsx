import { useRef } from "react";

type LoginFormProps = { close: () => void; loginGoogle: () => void };

const LoginForm = ({ close, loginGoogle }: LoginFormProps) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="fixed flex flex-col gap-2 p-3 text-white -translate-x-1/2 -translate-y-1/2 bg-gray-600 border-2 border-gray-800 rounded-md fadein top-1/2 left-1/2"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(emailRef?.current?.value || "Não tem email");
        console.log(passwordRef?.current?.value || "Não tem senha");
      }}
    >
      <button
        type="button"
        onClick={close}
        className="absolute flex items-center justify-center w-6 h-6 text-lg font-bold text-black transition-all duration-200 bg-white border-2 rounded-full cursor-pointer aspect-square -right-3 -top-3 hover:bg-red-500 border-gray-800/60 hover:text-white"
      >
        X
      </button>
      <input
        ref={emailRef}
        type="email"
        placeholder="E-mail"
        className="px-2 transition-all duration-200 border-2 border-gray-200 rounded-md text-gray-950 bg-lime-200 focus:outline-none focus:border-lime-400"
      />
      <input
        ref={passwordRef}
        type="password"
        placeholder="Password"
        className="px-2 transition-all duration-200 border-2 border-gray-200 rounded-md text-gray-950 bg-lime-200 focus:outline-none focus:border-lime-400"
      />
      <button
        type="submit"
        className="transition-all duration-200 bg-blue-500 border-2 border-blue-800 rounded-md hover:border-blue-300 hover:bg-blue-400"
      >
        Entrar
      </button>
      <button
        type="button"
        onClick={loginGoogle}
        className="transition-all duration-200 bg-red-500 border-2 border-red-800 rounded-md hover:border-red-300 hover:bg-red-400"
      >
        Entrar com Google
      </button>
      <button
        type="button"
        className="transition-all duration-200 bg-gray-800 border-2 border-gray-900 rounded-md hover:border-gray-300 hover:bg-gray-500"
      >
        Registrar
      </button>
    </form>
  );
};

export default LoginForm;
