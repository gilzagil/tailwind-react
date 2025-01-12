import Pagina from "@/components/template/pagina";
import Titulo from "@/components/template/titulo";

export default function Home() {
  return (
    <Pagina>
      <Titulo principal="Início"    
              secundario="Curso de React com Tailwind"
              gradiente/>
    </Pagina>
  );
}
