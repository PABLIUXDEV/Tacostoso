const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			tacos: [
				{
					id: 1,
					name: "Taco de Carnitas",
					description: "Un taco de carnitas es un taco que lleva carne de cerdo cocida en su propia grasa.",
					image_url: "https://img.freepik.com/foto-gratis/deliciosa-comida-callejera-naturaleza-muerta_23-2151535325.jpg?t=st=1726542687~exp=1726546287~hmac=d38d726de63f5ad9e944ddfccfee4ca5420044db53799f89a07e9262c3116aab&w=826"
				},
				{
					id: 2,
					name: "Taco de Barbacoa",
					description: "La barbacoa es un método de cocción de carnes que consiste en asarlas en un hoyo cubierto.",
					image_url: "https://i.pinimg.com/564x/2f/8f/bd/2f8fbd88f439fead732e62c7dfe788e4.jpg"
				},
				{
					id: 3,
					name: "Taco de Birria",
					description: "La birria es un platillo típico de México, que consiste en carne de chivo, borrego o res adobada.",
					image_url: "https://plus.unsplash.com/premium_photo-1681406995059-972cf4e86568?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				},
				{
					id: 4,
					name: "Taco de Cabeza",
					description: "El taco de cabeza es un taco que lleva carne de cabeza de res cocida. cebollas y cilantro.",
					image_url: "https://i.pinimg.com/564x/40/8c/24/408c24f87e6350a9d6f84f449e7a207b.jpg"
				},
				// {
				// 	id: 5,
				// 	name: "Taco de Lengua",
				// 	description: "El taco de lengua es un taco que lleva carne de lengua de res cocida.",
				// 	image_url: "https://www.cocinavital.mx/wp-content/uploads/2019/02/tacos-de-lengua.jpg"
				// },
				// {
				// 	id: 6,
				// 	name: "Taco de Tripa",
				// 	description: "El taco de tripa es un taco que lleva carne de tripa de res cocida.",
				// 	image_url: "https://www.cocinavital.mx/wp-content/uploads/2019/02/tacos-de-tripa.jpg"
				// },
				// {
				// 	id: 7,
				// 	name: "Taco de Suadero",
				// 	description: "El taco de suadero es un taco que lleva carne de suadero de res cocida.",
				// 	image_url: "https://www.cocinavital.mx/wp-content/uploads/2019/02/tacos-de-suadero.jpg"
				// },
			],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
