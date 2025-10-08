import React,{useState} from 'react'

const Login = ({ onLogin}) => {
    const [user, setuser] = useState('');
    const [password, setPassword] = useState('');
    const [error, seterror] = useState("");
    const [loading, setLoading] = useState(false);
    
    const onChange = (e) => {
        if (error){
            seterror("");
        }
        if(e.target.id === 'user'){
            setuser(e.target.value)
        }else{
            setPassword(e.target.value)
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        seterror("");
        setTimeout(() => {
            if (password.length <= 8 || user.length <5) {
                seterror("Password o usuarios muy cortos")
                setuser("")
                setPassword("")
            } else {
                setuser("")
                setPassword("")
                onLogin(user)
            }
            setLoading(false)
        }, 1000)
    }
  return (
    <>
        <div className="flex flex-col md:flex-row min-h-[70vh]">
            {/* Columna izquierda - Formulario */}
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-8 py-12">
                <div className="w-full max-w-sm">
                <h1 className="text-3xl font-bold text-center text-rosita mb-6">
                    Inicio de sesión
                </h1>

                {error && (
                    <p className="text-red-500 text-center text-sm mb-2">{error}</p>
                )}
                {loading && (
                    <p className="text-gray-500 text-center text-sm mb-2">Cargando...</p>
                )}

                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <div>
                    <label
                        htmlFor="user"
                        className="block text-sm font-medium text-rosita mb-1"
                    >
                        Usuario
                    </label>
                    <input
                        type="text"
                        id="user"
                        name="user"
                        value={user}
                        onChange={onChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-rosita outline-none"
                    />
                    </div>

                    <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-rosita mb-1"
                    >
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-rosita outline-none"
                    />
                    </div>

                    <button
                    type="submit"
                    className="w-full bg-rosita text-white font-semibold py-2 rounded-md transition mt-4 cursor-pointer"
                    >
                    Iniciar sesión
                    </button>
                </form>

                </div>
            </div>

            {/* Columna derecha - Imagen */}
            <div className="hidden md:flex w-1/2 bg-indigo-950 items-center justify-center">
                <img
                src="https://img.pikbest.com/origin/09/23/73/88GpIkbEsT8vF.png!sw800"
                alt="Login ilustración"
                className="max-w-md w-3/4"
                />
            </div>
        </div>
    </>
  )
}

export default Login