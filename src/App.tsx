import { useState } from 'react'
import { Container, Area, Header } from './App.styles'
import { Item } from './types/Item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar pão', done: false},
    {id: 2, name: 'Comprar bolo', done: true}
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  const handleAlterDone = (item: Item) => {
    let newList = list.map((i) => {
                    if(i.id === item.id){
                      i.done = item.done
                    }
                    return i
                  })
    setList(newList)
  }

  return (
    <Container>
      <Area>
        <Header>Liasta de tarefas</Header>
        <AddArea onEnter={handleAddTask}/>
        {list.map((item, index) => {
          return (
            <ListItem key={index} item={item} onDone={handleAlterDone}/>
          )
        })}
      </Area>
    </Container>
  )
}

export default App