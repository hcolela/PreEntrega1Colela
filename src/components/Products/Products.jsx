import procesador from '/src/components/Products/imagenes/procesador.png'
import microfono from '/src/components/Products/imagenes/microfono.png'
import monitor from '/src/components/Products/imagenes/monitor.png'
import './Products.css' 

function Products (props){
  return(
    <div className='contenedor-principal'>    
      <div className='contenedor-producto'>
        <img 
        className='imagen-producto'
        src={procesador}
        alt={props.procesador}/>
        <p className='nombre-producto'>{props.nombre}</p>
        <p className='descripcion-producto'>{props.descripcion}</p>
        <p className='precio-producto'>{props.precio}</p>
        <p className='mensaje-producto'>{props.mensaje}</p>
      </div>     
      <div className='contenedor-producto'>
        <img 
        className='imagen-producto'
        src={microfono}
        alt={props.microfono}/>
        <p className='nombre-producto'>{props.nombre1}</p>
        <p className='descripcion-producto'>{props.descripcion1}</p>
        <p className='precio-producto'>{props.precio1}</p>
        <p className='mensaje-producto'>{props.mensaje1}</p>
      </div>
      <div className='contenedor-producto'>
        <img 
        className='imagen-producto'
        src={monitor}
        alt={props.monitor}/>
        <p className='nombre-producto'>{props.nombre2}</p>
        <p className='descripcion-producto'>{props.descripcion2}</p>
        <p className='precio-producto'>{props.precio2}</p>
        <p className='mensaje-producto'>{props.mensaje2}</p>
      </div>
    </div>
  );
}

export default Products;