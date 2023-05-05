// Creacion de artículos:


const products = [
    // Salto en Paracaidas:
    {
        category: "airActivity",
        id: 1,
        title: "Salto en paracaidas",
        description: "Salto con Instructor desde 2500mts",
        price: 14000,
        imgHd:"/img/saltoParacidas.jpg",
        img: "/img/saltoParacidas200x135.jpg",
        detail: "El salto en paracaídas en la provincia de Mendoza, Argentina, es una emocionante actividad de turismo aventura que ofrece la oportunidad de lanzarse desde un avión a alturas superiores a los 2500 metros, acompañado por un paracaidista profesional. Esto garantiza la máxima seguridad durante la experiencia. Los aventureros pueden experimentar la emoción de la caída libre a velocidades vertiginosas mientras disfrutan de una vista panorámica espectacular de los paisajes montañosos de la región. Después de la intensa caída libre, se abre el paracaídas y se puede disfrutar de un descenso suave y controlado, admirando la belleza natural de Mendoza desde las alturas. Esta aventura única ofrece a los visitantes una experiencia inolvidable de adrenalina, emoción y libertad, con la tranquilidad de saber que están en manos de un paracaidista profesional que garantiza la seguridad en todo momento. Una experiencia de turismo aventura verdaderamente emocionante y segura en la provincia de Mendoza.",
        stock: 12,
        initial: 1
    },

    // Vuelo en parapente:

    {
        category: "airActivity",
        id: 2,
        title: "Vuelo en Parapente",
        description: "Una Hora Sobrevolando la ciudad de Mendoza",
        price: 25000,
        imgHd:"/img/vueloParapente.jpg",
        img: "/img/vueloParapente200x135.jpg",
        detail: "El parapente es una emocionante actividad de turismo aventura que permite a los visitantes de la provincia de Mendoza, Argentina, volar como aves y disfrutar de vistas panorámicas espectaculares. Mendoza es conocida por sus impresionantes paisajes montañosos y valles, lo que la convierte en un destino ideal para los amantes del parapente. Los aventureros pueden despegar desde las alturas y surcar los cielos en una experiencia emocionante y llena de adrenalina. Desde el aire, se puede apreciar la majestuosidad de las montañas de los Andes, los viñedos en terrazas y los paisajes deslumbrantes de la región. Con la brisa en el rostro y la sensación de libertad absoluta, el parapente en Mendoza ofrece una experiencia única y emocionante que combina la aventura con la belleza natural de la provincia.",
        stock: 12,
        initial: 2

    },

    // Vuelo en Globo:

    {
        category: "airActivity",
        id: 3,
        title: "Vuelo en Globo",
        description: "Disfrutá en atardecer a 500mts de altura",
        price: 4500,
        imgHd:"/img/vueloGlobo.jpg",
        img: "/img/vueloGlobo200x135.jpg",
        detail: "Los vuelos en globo en la provincia de Mendoza, Argentina, ofrecen una emocionante aventura de turismo que combina el placer de volar con impresionantes vistas panorámicas. Los visitantes pueden disfrutar del atardecer mientras flotan en el aire y admiran los paisajes montañosos y valles de la región. Además, se puede degustar el delicioso vino local mientras se contempla la belleza natural de Mendoza desde lo alto. Esta experiencia única permite a los viajeros relajarse y disfrutar de una actividad de turismo aventura inolvidable mientras se maravillan con la espectacularidad del atardecer y saborean los sabores de la región en un entorno tranquilo y mágico.",
        stock: 12,
        initial: 3
    },

    // Sandboard:
    {
        category: "groundActivity",
        id: 4,
        title: "Sandboard en las Dunas",
        description: "Adrenalina pura en Dunas de hasta 20mts",
        price: 5500,
        imgHd:"/img/sandBoard.jpg",
        img: "/img/sandBoard200x135.jpg",
        detail: "Practicar Sandboard en Mendoza es una emocionante experiencia de turismo aventura que combina la adrenalina del snowboard con la belleza del desierto. Con sus impresionantes dunas de arena, Mendoza ofrece un escenario perfecto para deslizarse sobre las crestas doradas y sentir la velocidad mientras se disfruta de las impresionantes vistas panorámicas del paisaje desértico. Los amantes de la aventura pueden desafiar sus habilidades en las altas dunas, experimentar la emoción de descender a toda velocidad y disfrutar de la sensación de libertad que ofrece esta actividad. Ya sea que seas un principiante entusiasta o un experto buscando un nuevo desafío, practicar sandboard en Mendoza es una actividad única que te permitirá combinar la emoción del deporte extremo con la belleza natural de la región. ¡Una experiencia inolvidable que seguramente aumentará la adrenalina de tu viaje de turismo aventura en Mendoza!",
        stock: 12,
        initial: 4
    },

    // Kayak:
    {
        category: "groundActivity",
        id: 5,
        title: "Kayak en Rio",
        description: "Recorré los mejores ríos de Mendoza",
        price: 4500,
        imgHd:"/img/kayak.jpg",
        img: "/img/kayak200x135.jpg",
        detail: "El kayak es una emocionante actividad de turismo aventura que se puede disfrutar en la provincia de Mendoza, Argentina. Con sus numerosos ríos y lagos de aguas cristalinas rodeados de impresionantes paisajes montañosos, Mendoza ofrece una oportunidad única para los amantes del kayak de explorar y sumergirse en la belleza natural de la región. Ya sea descendiendo rápidos emocionantes en ríos como el Mendoza o el Atuel, o navegando tranquilamente en lagos como el Potrerillos, el kayak en Mendoza brinda una experiencia inolvidable de aventura y conexión con la naturaleza en uno de los destinos turísticos más destacados de Argentina.",
        stock: 12,
        initial: 5
    },


];


export const mockFetch = () => {
    return new Promise((res, rej) => {

        try {
            res(products)
        } catch (error) {
            console.log(error);
        }

    })
}