import React from 'react';
import './TopCategories.css';

// 1. Importa las imágenes para las categorías.
//    Asegúrate de que las rutas sean correctas.
import pezAngelImg from '../../assets/pez1-category.jpg';
import pezBettaImg from '../../assets/pez2-category.jpeg';
import pezMollyImg from '../../assets/pez3-category.jpg';

// 2. Crea un array con los datos de las categorías para que sea más fácil de manejar.
const categories = [
	{
		name: 'Pez Ángel',
		image: pezAngelImg,
	},
	{
		name: 'Pez Molly',
		image: pezBettaImg,
	},
	{
		name: 'Pez Betta',
		image: pezMollyImg,
	},
];

const TopCategories = () => {
	return (
		<section className='top-categories container'>
			<h1 className='heading-1'>Mejores Peces</h1>
			<div className='container-categories'>
				{categories.map((category, index) => (
					<div
						key={index}
						className='card-category'
						style={{
							backgroundImage: `linear-gradient(#00000080, #00000080), url(${category.image})`,
						}}>
						<p>{category.name}</p>
						<span>Ver más</span>
					</div>
				))}
			</div>
		</section>
	);
};

export default TopCategories;// c:\Users\Facundo\Desktop\CARPETAS WEBS Utn Pruebas y Mi Pag\tpreact\prueba1\src\components\TopCategories\TopCategories.js
