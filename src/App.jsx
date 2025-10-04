import './App.css'
import Header from './components/header'
import Fondo from './components/Fondo'
import Ejemplo from './components/ejemplo'
import Mostrador from './components/Mostrador'
import Footer from './components/Footer'

function App() {
  const itemsList = ["Features","Pricing"]
  const elementos = [
    { titulo: "Elemento 1", precio:"56", descripcion: "Descripción 1", src: "./placeholder.png" },
    { titulo: "Elemento 2", precio:"56", descripcion: "Descripción 2", src: "./placeholder.png" },
    { titulo: "Elemento 3", precio:"56", descripcion: "Descripción 3", src: "./placeholder.png" },
    { titulo: "Elemento 4", precio:"56", descripcion: "Descripción 4", src: "./placeholder.png" },
    { titulo: "Elemento 5", precio:"56", descripcion: "Descripción 5", src: "./placeholder.png" },
    { titulo: "Elemento 6", precio:"56", descripcion: "Descripción 6", src: "./placeholder.png" },
    ];
  
//Diseño de: https://dribbble.com/shots/26399922-agency-website-ui-design?utm_source=Clipboard_Shot&utm_campaign=Black-Bulls&utm_content=agency%20website%20ui%20design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Black-Bulls&utm_content=agency%20website%20ui%20design&utm_medium=Social_Share
  return (
    <>
      <Fondo textofondo={"Increíble"}/>
      <div className=' bg-cafe mx-10 mt-[16vw]'>
        <Header title="AppShow" icon="./icon.svg" items={itemsList} link="#" />
        <h1 className='titulo'>Design Your</h1>
        <h1 className='titulo'>Own Journey</h1>
        <Ejemplo texto=" Empieza a convertir tus sueños en realidad"/>
        <Mostrador elementos={elementos}/>
        <Footer/>
      </div>
    </>
  )
}

export default App
