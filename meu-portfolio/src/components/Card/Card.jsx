import portfolio from '../../data/database'
import css from './Card.css'

const Card = () => {
    return ( 

        <>        
        <div className="container">

            {portfolio.map(cliente=>
    
            <div className="card" key = {cliente.id}> 
                <h2 className="nome"> {cliente.nome} </h2>
                <p className="segmento"> {cliente.segmento} </p>
                <img className="img" width ="250px" height="50%" src ={cliente.logo} alt ={cliente.nome}/>
                <a href= {cliente.link} target="_blank"> {cliente.nome} </a>
            </div>
        
            )}
            </div>
        </>
    )
}       

export default Card