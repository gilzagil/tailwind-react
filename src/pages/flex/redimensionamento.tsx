import Caixa from "@/components/caixa";

export default function Redimensionamento(){
    return(
        <div className="flex gap-1.5">
            {/* flex-none -> não cresce,  flex-auto -> cresce mas considera o tam definido */}
            {/* flex-1 -> cresce e não considera o tam definido  */}
            <Caixa className="w-14 flex-none">#1</Caixa>  
            <Caixa className="w-32 flex-auto">#2</Caixa>  
            <Caixa className="w-64 flex-1">#3</Caixa>  
        </div>
    )
}