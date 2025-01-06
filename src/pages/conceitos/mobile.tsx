export default function Mobile(){
    return(
        <div className="
        flex justify-center items-center
        bg-red-500 h-48
        text-3xl md:text-6xl lg:text-8xl
        ">
            <span className="inline sm:hidden">Mobile</span>
            <span className="hidden sm:inline">Não Mobile</span>
        </div>
    )
}