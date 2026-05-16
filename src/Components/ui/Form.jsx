
const Form = ({children,onSubmit}) => {
    return (
        <form
            className="flex justify-between gap-7 flex-col w-[300px] min-h-[250px] rounded-xl  bg-cyan-600  p-4"
            onSubmit={onSubmit}
        >
            {children}
        </form>
    );
};

export default Form;