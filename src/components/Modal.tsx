
type ILayoutProp = {
    children?: React.ReactNode
}

export const Modal = ({children}: ILayoutProp) => {
    return (
        <> 
            <div className="divplcaeholder"/>
            <dialog open className="dialogS">
                {children}
            </dialog>
        </>
    )
}