import { IconBrandTailwind } from "@tabler/icons-react";

export default function Logo(){
    return(
        <div className="flex justify-center px-3 mt-3 gap-2 text-blue-800">
            <IconBrandTailwind/>
            <span>Tailwind com React</span>
        </div>
    )
}