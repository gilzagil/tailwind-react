import Link from "next/link";
import React from "react";

interface MenuItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icone?: any;
  texto: string;
  url: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link href={props.url}>
      <div
        className="text-sm text-zinc-400 hover:bg-black 
        flex items-center gap-2 px-3 m-2"
      >
        <span>{React.cloneElement(props.icone, { stroke: 1 })}</span>
        <span className="text-xs">{props.texto}</span>
      </div>
    </Link>
  );
}
