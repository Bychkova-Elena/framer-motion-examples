import { Reorder } from 'framer-motion';
import {useState} from "react";

export const Example6 = () => {

    const [items, setItems] = useState([1, 2, 3, 4, 5]);

    return (
        <div className='container'>
            <Reorder.Group values={items} onReorder={setItems}>
                {items.map(item => (
                    <Reorder.Item key={item} value={item}>
                        {item}
                    </Reorder.Item>
                ))}
            </Reorder.Group>
        </div>
    )
}
