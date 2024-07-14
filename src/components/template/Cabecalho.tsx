import Logo from "./Logo";
import MenuUsuario from "./MenuUsuario";

export default function Cabecalho() {
  return (
    <header className="flex items-center bg-zinc-800 h-20 gap-5 px-5">
      <Logo />
      <span className="flex-grow">Cabeçalho</span>
      <MenuUsuario />
    </header>
  );
}
