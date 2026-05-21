const Modal = ({ setVisible, children }) => {
    return (
        <div
            className="fixed inset-0 bg-black/70 flex justify-center items-center"
            onClick={() => setVisible(false)}
        >
            <div
                className="w-[1000px] min-h-[400px] max-h-[600px] overflow-auto flex flex-col gap-3 bg-white rounded-md p-5"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};
export default Modal;