import { useState } from 'react'
import { Container } from './styles'
import { Item } from '../../types/Item'

type Props = {
    item: Item,
    onDone: (item: Item) => void
}

export const ListItem = ({ item, onDone }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done)
    
    const handleOnChande = (e: boolean) => {
        setIsChecked(e)
        onDone({
            id: item.id,
            name: item.name,
            done: !isChecked
        })
    }
    
    return (
        <Container done={isChecked}>
            <input type="checkbox" checked={isChecked} onChange={e => handleOnChande(e.target.checked)}/>
            <label>{item.name}</label>
        </Container>
    )
}