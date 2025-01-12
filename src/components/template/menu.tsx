import { IconAspectRatio, IconBox, IconBoxPadding, IconClick, IconComponents, IconContainer, IconDeviceMobile, IconDimensions, IconGridDots, IconResize, IconTextPlus, IconTexture, IconTypography } from "@tabler/icons-react"
import MenuGrupo from "./menugrupo"
import MenuItem from "./menuitem"

interface MenuProps{
    className?:string
}
export default function Menu(props: MenuProps){
    return(
        <div className={`p-4 ${props.className ?? ""}`}>
           <MenuGrupo texto="conceitos"/>
           <MenuItem icone={<IconTextPlus/>} texto="Classes" url="/conceitos/classes"/> 
           <MenuItem icone={<IconClick/>} texto="Componentes" url="/conceitos/componentes" /> 
           <MenuItem icone={<IconDeviceMobile/>} texto="Mobile" url="/conceitos/mobile" /> 
           <MenuItem icone={<IconComponents/>} texto="Pseudo" url="/conceitos/pseudo" /> 

           <MenuGrupo texto="Box Model"/>
           <MenuItem icone={<IconBox/>} texto="Box Sizing" url="/caixas/boxsizing" /> 
           <MenuItem icone={<IconBoxPadding/>} texto="Padding" url="/caixas/padding" /> 
           <MenuItem icone={<IconResize/>} texto="Tamanhos" url="/caixas/tamanhos" /> 

           <MenuGrupo texto="Flex"/>
           <MenuItem icone={<IconAspectRatio/>} texto="Revisão" url="/flex/inicial" /> 
           <MenuItem icone={<IconDimensions/>} texto="Redirecionamento" url="/flex/redimensionamento" /> 

           <MenuGrupo texto="Grid"/>
           <MenuItem icone={<IconGridDots/>} texto="Revisão" url="/grid/inicial" /> 

           <MenuGrupo texto="extras"/>
           <MenuItem icone={<IconContainer/>} texto="Container" url="/extras/container" /> 
           <MenuItem icone={<IconTexture/>} texto="Gradiente" url="/extras/gradiente" /> 
           <MenuItem icone={<IconTypography/>} texto="Texto Gradiente" url="/extras/titulo" /> 
        </div>
    )
}