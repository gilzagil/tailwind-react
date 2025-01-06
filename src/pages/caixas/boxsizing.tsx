import Caixa from "@/components/caixa";

export default function BoxSizing(){
    return(
        <div className="flex flex-col gap-2">
            <Caixa className="w-36">#1</Caixa>
            {/*  box-content - não considera as bordas para o tam definido */}
            <Caixa className="w-36 h-36 border-8 border-write">#2</Caixa>
        </div>

    )
}