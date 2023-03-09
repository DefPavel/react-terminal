import axios from "axios";
import {useState} from "react";
const Home = () => {

    const [ImageFiles, setImageFiles] = useState([]);
    const saveImage = async (e) => {
        try {
            e.preventDefault();
            const formData = new FormData();
            for(let i =0; i < ImageFiles.length; i++) {
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
                            id="file_input" type="file"/>
                    </div>
                </div>
                <button
                    className="rounded-md bg-indigo-600 py-2 px-3 font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    type={"submit"}>
                    Загрузить
                </button>
            </form>
        </div>
    )
}

export default Home