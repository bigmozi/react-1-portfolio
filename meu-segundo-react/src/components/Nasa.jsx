import {useState, useEffect} from 'react'
import './Nasa.css'


function Nasa (){


  
  const [repositories, setRepositories] = useState([])
  const[busca, setBusca] = useState ('')
  const [filtro, setFiltro] = useState([])


    useEffect(()=>{

      async function getData(){
        const response = await fetch('https://api.github.com/users/bigmozi/repos')
        const data = await response.json()
  
        setRepositories(data)
      }
      getData()
    
    },[])
    
    useEffect( () =>  { 
      setFiltro( 
          repositories.filter(repo => {
              return repo.name.includes(busca)
          } )
      )
  }, [repositories, busca])




        return (
            <div className='main'>
                <h3> Meus repositorios: </h3>

                  <input className='input' placeholder="Digite o nome do repositorio" 
                  onChange={e => {setBusca (e.target.value)}}/>

            <div className="card-container"> 

                  {filtro.map(repou => 
                    <div className= 'card' key={repou.id}>
                    <h3 key={repou.id}>{repou.name}</h3>
                    <a href={repou.html_url} target="_blank" rel="noreferrer"> ver + </a>
                    </div>
                    
                    )
                    
                  }

                  </div>



            </div>


            //   <input placeholder="Digite o nome do repositorio" 
            //       onChange={e => {setBusca (e.target.value)}}/>

            //       {filtro.map(repo => {repositories.map(repo=> 
            //         <div className="card-container" > 
                    
            //         <h3 key={repo.id}>{repo.name}</h3>
            //         <a href={repo.html_url} target="_blank" rel="noreferrer" className ="enter-repo"> ver + </a>
            //         </div>
                      
            //       )

            //       })}




            // </div>
                            
      
        )
                  
        
}


      











            
export default Nasa



