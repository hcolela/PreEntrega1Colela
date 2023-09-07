import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Products from './components/Products/Products'

function App() {
  const [count, setCount] = useState(0)
  const greeting='bienvenidos'
  
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={greeting} /> 
      <Products 
        nombre='Procesador Ryzen 7 5700 g'
        descripcion='Procesador Gamer AMD Ryzen de 8 núcleos y 4.6 GHz de frecuencia'
        precio='$294.999'
        mensaje='envío gratis' 
  
        nombre1='Microfono Inalambrico'
        descripcion1='Microfono Corbatero Inalambrico con patron polar omnidireccional compatible con Iphone'
        precio1='$27.999'
        mensaje1='envío gratis' 
        
        nombre2='Monitor Gamer Samsung G3'
        descripcion2='27 pulgadas Fhd 144 Hz Plano Negro con sistema de frecuencia de actualizaciones'
        precio2='$289.000'
        mensaje2='envío gratis' />
    </>
  )
}

export default App
