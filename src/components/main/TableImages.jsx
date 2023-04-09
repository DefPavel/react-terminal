
const TableImages = ({ dataImages = (f) => f }) => {
    return (
        <div className="py-4">
            <table className="min-w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                        <th className="p-2 border border-slate-300">Наименование файла</th>
                        <th className="p-2 border border-slate-300">Дата загрузки</th>
                        <th className="p-2 border border-slate-300">Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataImages.map((row, index) =>
                            <tr className="text-sm text-gray-700 text-center" key={index}>
                                <td className="p-2 font-bold text-blue-500 border-b border-gray-200">{row.name}</td>
                                <td className="p-2 w-24 border-b border-gray-200">{row.date}</td>
                                <td className="p-2 w-20 border-b border-gray-200"><button className="bg-red-500 rounded-lg shadow hover:bg-red-400 px-4 py-2">
                                   Delete
                                </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableImages