import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css'

const Burger = (props) => {
    let transfIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + Math.random()} type={igKey} />
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    if(transfIngredients.length === 0) {
        transfIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transfIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

export default Burger;