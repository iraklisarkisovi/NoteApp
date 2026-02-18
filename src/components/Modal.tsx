import "./componentStyles/Modal.css"
type ILayoutProp = {
    children?: React.ReactNode
    CloseModal: () => void
}

export const Modal = ({children, CloseModal}: ILayoutProp) => {
    return (
        <>
            <div className="divplaceholder" onClick={() => CloseModal()}/>
            <dialog open className="dialogS" >
                {children}
            </dialog>
        </>
    )
}