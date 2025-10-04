import './header.css'
import Boton from './subComponents/boton'
const Header = ({title,icon,items,link}) => {
  return (
    <>
        <div className='header'>
            <h3 className=' text-2xl'>{title}</h3>
            <img src={icon} alt={title} className='logo'/>
            <ul className='pr-16 flex align-middle justify-center gap-8'>{items.map((item,index) => <li key={index}>{item}</li>)}</ul>
            <Boton color="#290F1A" background="#ffffff" text={"GET APP"}/>
        </div>
    </>
  )
}

export default Header