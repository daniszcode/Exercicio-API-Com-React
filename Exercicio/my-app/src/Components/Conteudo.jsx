import { Personas } from "../Dados/Personagens";


const Conteudo = () => {   

    return (
        <>
        {Personas.map(item => 
        <div className="ativo" key={item.name}>
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.name}/>
        </div>
      )}
        </>
    )

}



export {Conteudo};