import Input from '../../components/ui/Input'
import Label from '../../components/ui/Label'
import { Button } from '../../components/ui/button'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto w-[350px] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Iniciar sesión</h1>
            <p className="text-gray-500 dark:text-gray-400">Ingresa tu correo electrónico para acceder a tu cuenta</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                type="text"
                placeholder="ejemplo@acme.com"
                className="w-full px-12 py-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:border-transparent block  border-gray-300  focus:border-gray-800  sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Contraseña</Label>
                <Link to="/forgot-password" className="ml-auto inline-block text-sm underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Iniciar sesión
            </Button>
            <Button  className="w-full outline-none">
              Iniciar sesión con Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            ¿No tienes una cuenta?
            <Link to="/register" className="underline">
              Regístrate
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-gray-100 lg:block dark:bg-gray-800">
        <img src="/placeholder.svg" alt="Image" width="1920" height="1080" className="h-full w-full object-cover" />
      </div>
    </div>
  )
}
