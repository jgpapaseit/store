import Product from "./Product.js";

test('Return 1', async () => {
	const id = 10
	const data = await Product(id)
	expect(data.id).toBe(id)
})