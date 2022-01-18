import { useState, useEffect } from "react";
import { ItemRepositorio } from "./ItemRepositorio"

import '../Styles/repositorios.scss';

interface Repositorio {
    name: string
    description: string
    html_url: string
}

export function ListagemRepositorio() {
    const [repositorios, setRepositorios] = useState<Repositorio[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/Honokai/repos')
            .then(resposta => resposta.json())
            .then(data => setRepositorios(data))
    }, [])

    return (
        <section className="lista-repositorio">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositorios.map(repositorio => {
                    return <ItemRepositorio key={repositorio.name} repositorio={repositorio} />
                })}
            </ul>
        </section>
    )
}