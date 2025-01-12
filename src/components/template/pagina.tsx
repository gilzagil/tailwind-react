import Logo from "./logo";
import Menu from "./menu";
import Usuario from "./usuario";

interface PaginaProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}
export default function Pagina(props: PaginaProps) {
  const ui = {
    nome: "Frankie Sullivan",
    email: "frankie@zmail.com",
    imagemUrl:
      "https://img.freepik.com/vetores-premium/design-de-avatar-de-pessoa_24877-38132.jpg",
  };
  return (
    <div className="flex h-screen">
      <aside className="bg-zinc-900 w-64">
        <Logo />
        <Menu className="p-7 overflow-auto pb-24" />
        <div className="fixed bottom-0 bg-zinc-900">
          <hr className="p-2 border-zinc-700 w-64" />
          <Usuario {...ui} />
        </div>
      </aside>
      <div className="p-7">{props.children}</div>
    </div>
  );
}
