import tw from "tailwind-styled-components";

type RootProps = {
    $stage: number;
}

export const Root = tw.div<RootProps>`
    absolute
    border-2
    border-black
    bg-white
    shadow-xl
    z-40
    rounded
    ${p => p.$stage < 2
        ?`
            transition-all 
            duration-500 
            ease-in-out
        `
        :`
        `
    }
`

export const Header = tw.header`
    flex
    justify-between
    sticky
    w-full
    h-12
    top-0
    bg-white
    px-6
    py-2
    border-b-2
    border-black
    cursor-move
    
`

export const Footer = tw.footer`
    flex
    justify-between
    absolute
    bottom-0
    bg-white
    px-12
    py-2
    shadow-inner
    border-t
    border-gray-200
    border-black
    w-full
    h-12
`

export const DraggableArea = tw.div`
    absolute
    top-0
    left-0
    h-12
    w-full
`

export const HeaderContent = tw.h1`
    font-bold
    text-2xl
    font-fancy 
    flex 
    items-center
`

export const PanelSectionHeader = tw.h2`
    font-bold
    text-xl
`

export const PanelSubsectionHeader = tw.h3`
    font-bold
    text-lg
`

export const Block = tw.div`
    ml-4
    mb-2
`

export const Close = tw.i`
    fas 
    fa-times 
    text-lg
    cursor-pointer
    transition-colors
    duration-200
    hover:text-red-500
`

export const Content = tw.div`
    px-6
    py-2
    h-[calc(100%-3rem)]
    overflow-y-auto
    overflow-x-hidden
    scroll
    scrollbar
`