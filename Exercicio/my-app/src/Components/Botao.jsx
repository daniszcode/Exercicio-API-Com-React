import { Personas } from "../Dados/Personagens";


const Botao = () => {
    const req =  Personas.map((item => {
             return  console.log(item.name)
    }))
    return (
        <>
        <button className="button" onClick={req}> Clique aqui </button>
        </>
    )
}

export { Botao }