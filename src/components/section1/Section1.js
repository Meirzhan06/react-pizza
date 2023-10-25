import React, { useState } from 'react'
import styles from './Section1.module.scss'
import arrow from '../../assets/arrow.svg'
import PizzaBlock from '../pizzaBlock/PizzaBlock'
import pizza1 from '../../assets/pizza1.jpg'
import pizza2 from '../../assets/pizza2.jpg'
import pizza3 from '../../assets/pizza3.jpg'
import pizza4 from '../../assets/pizza4.jpg'

export default function Section1() {


    const pizzaKinds = [
        {
            id: 1,
            text: 'Все'
        },
        {
            id: 2,
            text: 'Мясные'
        },
        {
            id: 3,
            text: 'Вегетарианская'
        },
        {
            id: 4,
            text: 'Гриль'
        },
        {
            id: 5,
            text: 'Острые'
        },
        {
            id: 6,
            text: 'Закрытые'
        },
    ] 

    const pizzas = [
        {
            id: 1,
            img: `${pizza1}`,
            title: 'Чизбургер-пицца',
            doughs: ['тонкое', 'толстое'],
            sizes: ['26 см.', '30 см.', '40 см.'],
            kind: "Мясные",
            price: 189,
            count: 0
        },
        {
            id: 2,
            img: `${pizza2}`,
            title: 'Сырная',
            doughs: ['тонкое', 'толстое'],
            sizes: ['26 см.', '30 см.', '40 см.'],
            kind: "Вегетарианская",
            price: 285,
            count: 0
        },
        {
            id: 3,
            img: `${pizza3}`,
            title: 'Креветки по-азиатски',
            doughs: ['тонкое', 'толстое'],
            sizes: ['26 см.', '30 см.', '40 см.'],
            kind: "Гриль",
            price: 385,
            count: 0
        },
        {
            id: 4,
            img: `${pizza4}`,
            title: 'Сырный цыпленок',
            doughs: ['тонкое', 'толстое'],
            sizes: ['26 см.', '30 см.', '40 см.'],
            kind: "Острые",
            price: 129,
            count: 0
        },
        {
            id: 5,
            img: `${pizza1}`,
            title: 'Чизбургер-пицца',
            doughs: ['тонкое', 'толстое'],
            sizes: ['26 см.', '30 см.', '40 см.'],
            kind: "Мясные",
            price: 189,
            count: 0
        },
        {
            id: 6,
            img: `${pizza2}`,
            title: 'Сырная',
            doughs: ['тонкое', 'толстое'],
            sizes: ['26 см.', '30 см.', '40 см.'],
            kind: "Вегетарианская",
            price: 285,
            count: 0
        },
        {
            id: 7,
            img: `${pizza3}`,
            title: 'Креветки по-азиатски',
            doughs: ['тонкое', 'толстое'],
            sizes: ['26 см.', '30 см.', '40 см.'],
            kind: "Гриль",
            price: 385,
            count: 0
        },
        {
            id: 8,
            img: `${pizza4}`,
            title: 'Креветки по-азиатски',
            doughs: ['тонкое', 'толстое'],
            sizes: ['26 см.', '30 см.', '40 см.'],
            kind: "Острые",
            price: 129,
            count: 0
        },
        {
            id: 9,
            img: `${pizza1}`,
            title: 'Чизбургер-пицца',
            doughs: ['тонкое', 'толстое'],
            sizes: ['26 см.', '30 см.', '40 см.'],
            kind: "Мясные",
            price: 189,
            count: 0
        },
        {
            id: 10,
            img: `${pizza2}`,
            title: 'Сырная',
            doughs: ['тонкое', 'толстое'],
            sizes: ['26 см.', '30 см.', '40 см.'],
            kind: "Вегетарианская",
            price: 285,
            count: 0
        },
        {
            id: 11,
            img: `${pizza3}`,
            title: 'Креветки по-азиатски',
            doughs: ['тонкое', 'толстое'],
            sizes: ['26 см.', '30 см.', '40 см.'],
            kind: "Гриль",
            price: 385,
            count: 0
        },
        {
            id: 12,
            img: `${pizza4}`,
            title: 'Сырный цыпленок',
            doughs: ['тонкое', 'толстое'],
            sizes: ['26 см.', '30 см.', '40 см.'],
            kind: "Закрытые",
            price: 129,
            count: 0
        },
        
    ]


    const [kind, setKind] = useState(1)
    const [kindText, setKindText] = useState('Все')
    const [isSortList, setIsSortList] = useState(false)
    const [sortValue, setSortValue] = useState("популярности")
    const [pizzasToShow, setPizzasToShow] = useState(8)


    function filterPizzasByKind(selectedKind){
        if (selectedKind === 'Все') {
            // Если выбран вид "Все", возвращаем все пиццы
            return pizzas;
        } else {
            return pizzas.filter(pizza => pizza.kind === selectedKind);
        }
    }
    const filteredPizzas = filterPizzasByKind(kindText);

    let visibleItems = filteredPizzas.slice(0, pizzasToShow);

    if (sortValue === 'по алфавиту') {
        visibleItems = [...visibleItems].sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
    }
    if (sortValue === 'по цене') {
        visibleItems = [...visibleItems].sort((a, b) => {
            return a.price - b.price
        });
    }

    function showMorePizzas(){
        setPizzasToShow(prevItemsToShow => prevItemsToShow + 8)
    }

    function setPizzaKind(id, text){
        setKind(id)
        setKindText(text)
    }

    const kinds = pizzaKinds.map(pizzaKind => (
        <div onClick={(e) => setPizzaKind(pizzaKind.id, e.target.innerText)} className={`${styles.kind} ${kind === pizzaKind.id ? styles.active : ''}`} key={pizzaKind.id}>
            {pizzaKind.text}
        </div>
    ))

    function sortList(text){
        setIsSortList(!isSortList)
        setSortValue(String(text))
    }
    function closeSort(){
        if (isSortList) {
            setIsSortList(false)
        }
    }
        
    const allPizzas = visibleItems.map(pizza => (
        <PizzaBlock key={pizza.id} title={pizza.title} doughs={pizza.doughs} sizes={pizza.sizes} id={pizza.id} price={pizza.price} count={pizza.count} img={pizza.img}/>
    ))

  return (
    <div onClick={closeSort} className={styles.section1}>
        <div className='container'>
            <div className={styles.filters}>
                <div className={styles.kinds}>
                    {kinds}
                </div>
                <div className={styles.sort}>
                    <div className={styles.sortBlock}>
                        <img className={`${styles.arrow} ${isSortList ? styles.active : ''}`} src={arrow} alt="" />
                        <b>Сортировка по:</b>
                        <div onClick={() => sortList(sortValue)} className={styles.sortKind}>{sortValue}</div>
                        <div className={`${styles.hiddenSort} ${isSortList ? styles.active : ''}`}>
                            <div className={`${styles.sortListKind} ${sortValue === 'популярности' ? styles.active : ''}`} onClick={(e) => sortList(e.target.innerText) }>популярности</div>
                            <div className={`${styles.sortListKind} ${sortValue === 'по цене' ? styles.active : ''}`} onClick={(e) => sortList(e.target.innerText)}>по цене</div>
                            <div className={`${styles.sortListKind} ${sortValue === 'по алфавиту' ? styles.active : ''}`} onClick={(e) => sortList(e.target.innerText)}>по алфавиту</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.title}>
                <h2>Все пиццы</h2>
            </div>
            <div className={styles.pizzaSection}>
                {allPizzas}
            </div>
            <div className={styles.viewMore}>
                <p onClick={showMorePizzas}>Посмотреть еще</p>
            </div>
        </div>
    </div>
  )
}
