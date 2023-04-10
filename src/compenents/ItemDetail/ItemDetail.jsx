import { ItemCounter } from "../ItemCounter/ItemCounter"
import "./ItemDetail.css"

export const ItemDetail = ()=>{

    return (
        <article className="ItemDetail">
            <img src="../../../public/img/vueloParapente.jpg" alt="" />

            <div className="ItemDescription">
                <h3>Titulo</h3>
                <p>El parapente es una emocionante actividad de turismo aventura que permite a los visitantes de la provincia de Mendoza, Argentina, volar como aves y disfrutar de vistas panorámicas espectaculares. Mendoza es conocida por sus impresionantes paisajes montañosos y valles, lo que la convierte en un destino ideal para los amantes del parapente. Los aventureros pueden despegar desde las alturas y surcar los cielos en una experiencia emocionante y llena de adrenalina. Desde el aire, se puede apreciar la majestuosidad de las montañas de los Andes, los viñedos en terrazas y los paisajes deslumbrantes de la región. Con la brisa en el rostro y la sensación de libertad absoluta, el parapente en Mendoza ofrece una experiencia única y emocionante que combina la aventura con la belleza natural de la provincia.</p>
                
            </div>
            <ItemCounter />
        </article>
    )

}