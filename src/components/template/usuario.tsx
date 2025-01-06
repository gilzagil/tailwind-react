interface UsuarioProps{
    nome: string
    email: string
    imagemUrl?: string
}

export default function Usuario(props:UsuarioProps){
    return(
        <div>
             {/* {props.imagemUrl} */}
             {/* <Image 
              src={props.imagemUrl} 
              alt="avatar"
              height={50}
              width={50}
              />   */}
              
            <div className="flex flex-col text-xs px-6 text-zinc-400">
                <span>{props.nome}</span>
                <span>{props.email}</span>
            </div>
        </div>
    )
}