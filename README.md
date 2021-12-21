# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `Despliegue del proyecto Firebase`

>Iniciar sesión en firebase(puede crearse cuentas gratis o iniciar con google)
>instalar firebase-tools
>ir a la raíz del proyecto y abrir una terminal
	>>escribir en la terminal firebase login
>usar comando firebase init 
>npm run build en la raíz 
>firebase deploy 

### `Docker file`
> Construir imagen 
  docker build -t covidreactapp .

> Correr imagen de docker 
  docker run --name covidreactapp -p 3000:3000 -d  covidreactapp

  (Por defecto corre en el puerto 3000)



