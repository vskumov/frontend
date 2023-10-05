// TODO
// Счетчик кликов Создайте компонент, который регистрирует количество кликов, сделанных пользователем по всему документу, и выводит это количество на экран.
// Разбор задания:
// Используйте useState для создания состояния, которое будет хранить количество кликов.
// Используйте useEffect для добавления глобального слушателя событий click к документу.
// В слушателе событий увеличивайте счетчик кликов.
// Не забудьте удалить слушатель событий при размонтировании компонента.

import React, {useState, useEffect} from 'react'

function CountClicks() {
    const [amountClick, setAmountClick] = useState(0);

    const listener = ()=>{
        setAmountClick((counter)=>
            counter+1
        )
    };

    useEffect(()=>{
        document.addEventListener('click', listener);
        return ()=>{
            document.removeEventListener('click', listener);
        }

    },[])
  return (
    <div>
        <p>{amountClick}</p>
    </div>
  )
}

export default CountClicks
