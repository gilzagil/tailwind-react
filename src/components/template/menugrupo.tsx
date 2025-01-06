interface MenuGrupoProps{
    texto:string
}

export default function MenuGrupo(props: MenuGrupoProps){
    return(
        <div className="uppercase text-xs font-bold text-zinc-400 pt-2">
            {props.texto}
        </div>
    )
}