interface ItemRepositorioProps {
    repositorio: {
        name: string
        description: string
        html_url: string
    }
}

export function ItemRepositorio(props: ItemRepositorioProps) {
    return (
        <li>
            <strong>{props.repositorio?.name ?? 'Padrao'}</strong>
            <p>{props.repositorio?.description ?? 'descricao'}</p>
            <a target="_blank" href={props.repositorio?.html_url ?? "#"}>
                Acessar Repositorio
            </a>
        </li>
    )
}