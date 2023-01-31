import fetch from "node-fetch"

const Product = async (id) => {
	return await fetch('https://fakestoreapi.com/products/' + id)
		.then(response => response.json())
		.then(json => { return json })
}

export default Product
