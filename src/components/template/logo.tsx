import { IconBrandTailwind } from "@tabler/icons-react";

export default function Logo() {
  return (
    <div className="flex justify-center mt-3 gap-2 text-blue-800">
      <IconBrandTailwind stroke={1}/>
      <span>Tailwind com React</span>
    </div>
  );
}
