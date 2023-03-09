const Login = () => {
    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                        Логин
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                           required={true}
                           id="username"
                           type="text"
                           placeholder="Введите логин" />
                </div>
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                        Пароль
                    </label>
                    <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
                           id="password"
                           type="password"
                           required={true}
                           placeholder="Введите пароль" />
                </div>
                <div className="flex items-center justify-between">
                    <button className="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            type={"submit"}>
                        Ввойти
                    </button>
                </div>
            </form>
            <p className="text-center text-grey text-xs">
                ©2023
            </p>
        </div>
    )
}

export default Login