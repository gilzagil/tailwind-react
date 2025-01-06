import Caixa from "@/components/caixa";

export default function Tamanhos(){
    return(
        <div className="flex flex-col gap-5">
            <Caixa className="w-16 h-16">#1</Caixa>
            <Caixa className="w-1/4">#2</Caixa>
            <Caixa className="w-1/2">#3</Caixa>
            <Caixa className="w-[75%]">#4</Caixa>
            <Caixa className="w-[200px]">#5</Caixa>
            <Caixa className="w-full">#6</Caixa>
        </div>
    )
}