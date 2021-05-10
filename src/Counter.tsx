import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import counter from './store/counter'

const Counter: FC = observer(() => {
    const decrease = (): void => {
        counter.decrease()
    }

    const increase = (): void => {
        counter.increase()
    }

    return (
        <>
            <div onClick={decrease}>Minus</div>
            <div>{counter.counter}</div>
            <div onClick={increase}>Plus</div>
            <div>Total: {counter.total}</div>
        </>
    )
})

export default Counter