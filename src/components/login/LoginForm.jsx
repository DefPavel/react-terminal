import logo from '../../assets/logo.svg';
import { Button } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const LoginForm = ({ signIn = (f) => f, setPassword = (f) => f, setLogin = (f) => f, error = '' }) => {
    return (
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <form className="w-full" onSubmit={signIn}>
                        <h1
                            className="mt-4 text-2xl font-semibold tracking-wide text-center text-gray-800 capitalize md:text-4xl dark:text-white">
                            Admin-<span className="text-blue-500 ">Terminal</span>
                        </h1>
                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </span>
                            <input
                                onChange={(e) => setLogin(e.target.value)}
                                required={true}
                                type="text"
                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Введите логин" />
                        </div>
                        <div className="relative flex items-center mt-4">
                            <span
                                className="absolute">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                                    fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                </svg>
                            </span>

                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                required={true}
                                type="password"
                                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Введите пароль" />
                        </div>

                        <div className="mt-6">
                            <Button type='sumbit' fullWidth size="md" className="flex items-center gap-3">
                                <ArrowRightIcon strokeWidth={2} className="h-5 w-5" /> Ввойти
                            </Button>


                        </div>
                    </form>

                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-full h-full lg:max-w-3xl" src={logo} alt="Catalogue-pana.svg" />
            </div>
        </div>
    )
}

export default LoginForm