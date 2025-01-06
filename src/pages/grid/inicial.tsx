import Caixa from "@/components/caixa";

export default function Inicial(){
    return(
        <div className="grid p-7 gap-2.5 
        grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6
        ">
            <Caixa className="row-span-2">#1</Caixa>
            <Caixa>#2</Caixa>
            <Caixa>#3</Caixa>
            {/* <Caixa>#4</Caixa> */}
            <Caixa className="col-span-2">#5</Caixa>
            {/* <Caixa>#6</Caixa> */}
            <Caixa>#7</Caixa>
            <Caixa>#8</Caixa>
            <Caixa>#9</Caixa>
            <Caixa>#10</Caixa>
            <Caixa>#11</Caixa>
            <Caixa>#12</Caixa>
        </div>
    )
}