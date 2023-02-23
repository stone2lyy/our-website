import React,{useState} from 'react'
import Layout from '@theme/Layout';
import style from './su.module.css';

export default () => {
    const [sudoku, setSudoKu] = useState([
        ['.', '.', '.', '4', '.', '.', '.', '3', '.'],
        ['7', '.', '4', '8', '.', '.', '1', '.', '2'],
        ['.', '.', '.', '2', '3', '.', '4', '.', '9'],
        ['.', '4', '.', '5', '.', '9', '.', '8', '.'],
        ['5', '.', '.', '.', '.', '.', '9', '1', '3'],
        ['1', '.', '.', '.', '8', '.', '2', '.', '4'],
        ['.', '.', '.', '.', '.', '.', '3', '4', '5'],
        ['.', '5', '1', '9', '4', '.', '7', '2', '.'],
        ['4', '7', '3', '.', '5', '.', '.', '9', '1']
    ])
    return <div className={style.wrap}>
        <div className={style.container}>
            {sudoku.map((list, row) => list.map((item, col) => (
                <div className={style.cell} key={`box-${row}-${col}`}>{item !== '.' && item}</div>)))}
        </div>
    </div>
}