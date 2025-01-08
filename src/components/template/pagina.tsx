import Logo from "./logo"
import Menu from "./menu"
import Usuario from "./usuario"

interface PaginaProps{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
}
export default function Pagina(props: PaginaProps){
    const ui = {
        nome:"Frankie Sullivan",
        email:"frankie@zmail.com",
        imagemUrl: "https://img.freepik.com/vetores-premium/design-de-avatar-de-pessoa_24877-38132.jpg"
    }
    return(
        <div className="flex h-screen">
            <aside className="bg-zinc-900 w-60">
                <Logo />
                <Menu />
                <hr className="p-1 border-zinc-700"/>  
                <Usuario {...ui} />
            </aside>
            <div className="p-7">
                {props.children}
            </div>
        </div>
    )
}