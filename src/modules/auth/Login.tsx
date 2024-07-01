import Input from "../../components/ui/Input";
import Label from "../../components/ui/Label";
import { Button } from "../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import houseImage from "../../assets/images/house.jpg";
import { useCallback, useState } from "react";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  //Validaciones

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      setMessageError("Email no válido");
      return false;
    }

    return true;
  };

  const validatePassword = (password: string): boolean => {
    if (password.length <= 6) {
      setMessageError("Password debe ser mayor de 6 caracteres");
      return false;
    }

    return true;
  };

  // const handleChange = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  //   type: string
  // ) => {

  //   if (type === "email") setEmail(event.target.value);
  //   if (type === "password") setPassword(event.target.value);

  // };

  const showErrorMessage = () =>{
    setError(true);
    setTimeout(() =>{
      setError(false);
      setMessageError('')
    }, 2000);
  }

  const handleChangeEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      setEmail(value);
    }, []
  );


  const handleChangePassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      setPassword(value);
    }, []
  );

  const handleSubmit = async () => {
    setIsLoading(true)
    console.log('click')
    
    if (!validateEmail(email)) {
      showErrorMessage();
      setIsLoading(false);
      return;
    }
    if (!validatePassword(password)) {
      showErrorMessage();
      setIsLoading(false);

      return;
    }

    //const url = process.env.BASE_URl  + "user/login" || ''
    const url = 'https://inmo-smart-app-be.vercel.app/user/login'

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.statusCode === 401) {
       
        showErrorMessage()
        setMessageError(data.message);
        setIsLoading(false);
        return;
      }

      navigate("/");
      setIsLoading(false);

    } catch (error) {
      setError(true);
      setIsLoading(false);

       


      console.log(error);
    }
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto w-[350px] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Iniciar sesión</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Ingresa tu correo electrónico para acceder a tu cuenta
            </p>
          </div>
          <div className="space-y-4">
          

            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                type="text"
                id="email"
                value={email}
                onChange={(e) => handleChangeEmail(e)}
                placeholder="ejemplo@acme.com"
                className="w-full px-12 py-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:border-transparent block  border-gray-300  focus:border-gray-800  sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Contraseña</Label>
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <Input
                value={password}
                id="password"
                type="password"
                onChange={(e) => handleChangePassword(e)}
                required
                className="w-full px-12 py-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:border-transparent block  border-gray-300  focus:border-gray-800  sm:text-sm"
              />
            </div>
            {error && (
              <div className="space-y-2 transition-all">
                <span className="text-red-400  transition-all ">{messageError}</span>
              </div>
            )}
            <Button type="submit" className="w-full mt-12" onClick={handleSubmit} disabled={isLoading}>
              Iniciar sesión
            </Button>
            <Button className="w-full outline-none " >
              Iniciar sesión con Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            ¿No tienes una cuenta? 
            <Link to="/auth/register" className="underline ml-2">
               Regístrate
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-gray-100 lg:block dark:bg-gray-800">
        <img
          src={houseImage}
          alt="Tex alterantive"
          width="1920"
          height="1080"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
