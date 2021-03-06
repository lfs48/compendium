import tw from 'tailwind-styled-components';

export const Root = tw.div`
    w-full
    h-full
    bg-beige-lighter
    border-2
    border-black
    px-6
    py-4
    rounded
    flex
    flex-col
    justify-between
    space-y-4
`

export const Body = tw.div`
    flex 
    flex-col 
    h-full
`

export const Top = tw.div`
    inline-flex
`

export const Selects = tw.div`
    flex 
    space-x-8 
    justify-end
`

export const Buttons = tw.div`
    flex
    self-end
    space-x-8
`

export const Button = `
    w-24
`

export const Name = `
    font-fancy
    text-[1.75rem] 
    font-bold leading-[2rem]
`

export const Description = `
    h-full
`