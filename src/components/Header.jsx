import './header.css'
import Boton from './subComponents/boton'
const Header = ({title,icon,items,setlogut,User}) => {
  return (
    <>
        <div className='header'>
            <h3 className='text-lg max-sm:max-w-[60vw] md:text-2xl'>{title+ " | Bienvenido: " + User}</h3>
            <img src={icon} alt={title} className='logo max-sm:hidden'/>
            <ul className='pr-16 flex align-middle justify-center gap-8 max-sm:hidden'>{items.map((item,index) => <li key={index}>{item}</li>)}</ul>
            <Boton color="#290F1A" background="#ffffff" text={"Logout"} onclick={setlogut}/>
        </div>
    </>
  )
}

export default Header