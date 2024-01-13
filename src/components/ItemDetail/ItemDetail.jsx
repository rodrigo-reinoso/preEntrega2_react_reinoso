import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.css'


const ItemDetail = ({ id, name, img, description, stock, price }) => {
    const handleOnAdd = (quantity) => {
        const objProduct = {
            id,
            name,
            price,
            quantity
        }

        console.log('Se agregó correctamente: ', objProduct)
    }
    return (

        <div className={classes.cardDetail}>
            <img src={img} alt={`Imagen de ${name}`} className={classes.imgDetail} />
            <div className={classes.bodyDetail}>
                <h4 className={classes.Title}>{name}</h4>
                <p className='infoDetail'>{description}</p>
                <div>
                    <p><strong>Precio: $ {price}</strong></p>
                    <p>Stock: {stock}</p>
                </div>
                <div className={classes.itemCountDetail}>
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                </div>
            </div>
        </div>

    )
}

export default ItemDetail