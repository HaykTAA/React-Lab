function Topic({ onStart, name, project }) {
    return (
        <div className="w-full max-w-3xl mx-auto bg-cyan-950 border border-gray-700 rounded-2xl shadow-lg p-6 space-y-5">

            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-white">{name}</h2>
                <span className="text-gray-400 text-xl font-semibold">
                    Finished
                </span>
            </div>

            <div className="border-t border-gray-600"></div>

            <div>
                <p className="text-gray-300 text-lg">
                    Mini Project: <span className="font-semibold text-white">{project}</span>
                </p>
            </div>

            <button
                className="w-full bg-blue-700 hover:bg-blue-600 transition text-black text-xl font-semibold py-3 rounded-xl shadow-md"
                onClick={onStart}
            >
                start
            </button>
        </div>
    );
}

export default Topic;