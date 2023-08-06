const products = [
    {
        id: 1,
        productName: 'saddle bag with strap',
        productImage: 'product-pics/1.png',
        price: '$4200',
        description: 'Some text that describes me lorem ipsum ipsum lorem.'
    },
    {
        id: 2,
        productName: 'medium lady d-joy bag',
        productImage: 'product-pics/2.png',
        price: '$5050',
        description: 'Some text that describes me lorem ipsum ipsum lorem.'
    },
    {
        id: 3,
        productName: 'small lady dior bag',
        productImage: 'product-pics/3.png',
        price: '$6050',
        description: 'Some text that describes me lorem ipsum ipsum lorem.'
    }
]


export const getProducts = () => {
    products.map(product => {
        return (
        <div class="column">
            <div class="card">
              <img src="product-pics/1.png" alt="Bag" style="width: 100%;"/>
              <div class="container">
                <h2>{product.productName}</h2>
                <p>{product.description}</p>
                <p class="price">{product.price}</p>
                <button class="button">Add to cart</button>
              </div>
            </div>
          </div>
        )
    })
}