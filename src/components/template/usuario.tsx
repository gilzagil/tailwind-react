import { IconDotsVertical } from "@tabler/icons-react"
import Image from "next/image"
/* eslint-disable @next/next/no-img-element */
interface UsuarioProps{
    nome: string
    email: string
    imagemUrl: string
}

export default function Usuario(props:UsuarioProps){
    return(
        <div className="flex pl-4">
            <Image 
              src={props.imagemUrl} 
              alt="avatar"
              height={40}
              width={40}
              className="rounded-full"
            />      
            
            <div className="flex flex-col text-xs px-4 text-zinc-400">
                <span>{props.nome}</span>
                <span>{props.email}</span>
            </div>
            <div className="flex-1"></div>
            <IconDotsVertical className="cursor-pointer"/>
        </div>
    )
}