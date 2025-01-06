/* eslint-disable @typescript-eslint/no-explicit-any */
interface CaixaProps{
    className?: string
    children: any
}
export default function Caixa(props:CaixaProps){
    return(
        <div className={`bg-red-500 rounded-md
            ${props.className ?? ""}`}>
            {props.children}
        </div>
    )
}