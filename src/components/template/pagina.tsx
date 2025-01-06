import Logo from "./logo"
import Menu from "./menu"
import Usuario from "./usuario"

interface PaginaProps{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
}
export default function Pagina(props: PaginaProps){
    return(
        <div className="flex h-screen">
            <aside className="bg-zinc-900 w-60">
                <Logo />
                <Menu />
                <Usuario nome="Frankie Sullivan" email="frankie@zmail.com" />
            </aside>
            <div className="p-7">
                {props.children}
            </div>
        </div>
    )
}