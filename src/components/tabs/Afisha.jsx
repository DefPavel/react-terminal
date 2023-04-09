import TableImages from "../../components/main/TableImages";
import {
    Typography,
    Select,
    Option,
    IconButton,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";


const AfishaPage = () => {

    const rows = [
        {
            id: 1,
            name: 'Файл 1.jpg',
            date: '07.04.2023'
        },
        {
            id: 2,
            name: 'Файл 2.png',
            date: '07.04.2023'
        },
        {
            id: 3,
            name: 'Файл 3.png',
            date: '07.04.2023'
        },
    ]


    const [ImageFiles, setImageFiles] = useState([]);

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

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <div className="flex flex-col gap-4 p-3">
            <Typography className="mb-4" variant="h1" color="blue-gray">
                Публикация Афишы
            </Typography>
            <div className="mb-3 flex items-center justify-between">
                <Select label="Выбрать элемент">
                    <Option>Терминал ИПР</Option>
                    <Option>Терминал ФИЗВОСП</Option>
                    <Option>Терминал ИПП</Option>
                    <Option>Терминал ФФ</Option>
                </Select>
                <IconButton size="md" className="ml-2" onClick={handleOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                    </svg>
                </IconButton>
            </div>
            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogHeader>Загрузка данных</DialogHeader>
                <DialogBody divider>
                    <form>
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
                    </form>


                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={saveImage}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>

            <TableImages
                dataImages={rows}
            />
        </div>
    )
}

export default AfishaPage;