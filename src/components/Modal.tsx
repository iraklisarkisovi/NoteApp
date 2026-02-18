import "./componentStyles/Modal.css"
import { useNavigate } from "react-router"
type ILayoutProp = {
    children?: React.ReactNode
}

export const Modal = ({children}: ILayoutProp) => {
    const Navigate = useNavigate()
    
    const CloseModal = () => {
        Navigate("/")
    }

    return (
        <>
            <div className="divplaceholder" onClick={() => CloseModal()}/>
            <dialog open className="dialogS" >
                {children}
            </dialog>
        </>
    )
}