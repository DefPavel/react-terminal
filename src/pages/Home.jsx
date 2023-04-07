import axios from "axios";
import { useState } from "react";
const Home = () => {

    const [ImageFiles, setImageFiles] = useState([]);
    const rows = [
        {
            id: 1,
            name: 'Файл 1',
            date: '07.04.2023'
        },
        {
            id: 2,
            name: 'Файл 2',
            date: '07.04.2023'
        },
        {
            id: 3,
            name: 'Файл 3',
            date: '07.04.2023'
        },
    ]
    const saveImage = async (e) => {
        try {
            e.preventDefault();
            const formData = new FormData();
            for (let i = 0; i < ImageFiles.length; i++) {
                formData.append("file", ImageFiles[i]);
            }
            const response = await axios({
                method: "post",
                url: "http://localhost:8080/api/terminal/afisha/upload/1",
                data: formData
            })

            return response.data;

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form onSubmit={(e) => saveImage(e)}>
                <div className="-mx-3 md:flex mb-6">
                    <div className="max-w-2xl mx-auto">

                        <label className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="file_input">Загрузка афиш</label>
                        <input
                            name="uploaded_file"
                            onChange={(e) => setImageFiles(e.target.files)}
                            multiple={true}
                            className="text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            id="file_input" type="file" />
                    </div>
                </div>
                <button
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    type={"submit"}>
                        Загрузить
                </button>
            </form>
            <div className="py-4">
            <table className="border-separate border border-slate-400 text-gray-700">
                <thead>
                    <tr>
                        <th className="border border-slate-300">Наименование файла</th>
                        <th className="border border-slate-300">Дата загрузки</th>
                        <th className="border border-slate-300">Действие</th>
                    </tr>
                </thead>
                <tbody>
                {
                    rows.map((row, index) => 
                    <tr key={index}>
                        <td>{row.name}</td>
                        <td>{row.date}</td>
                        <td>Удалить</td> 
                    </tr>
                    )
                }
                </tbody>
            </table>
            </div>
           
        </div>
    )
}

export default Home