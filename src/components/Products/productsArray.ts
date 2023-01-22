export type ProductsProps = {
    id:number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}


const productsArray:ProductsProps[] = [
    {
        id:1,
        title:"iPhone X",
        desc:"This is iPhone X",
        type:"phone",
        capacity:"64",
        price:15000,
        image:"/images/iphone-black.jpg"
    },

    {
        id:2,
        title:"iPhone 12",
        desc:"This is iPhone 12",
        type:"phone",
        capacity:"128",
        price:20000,
        image:"/images/iphone-blue.jpg"
    },

    {
        id:3,
        title:"iPhone 13",
        desc:"This is iPhone 13",
        type:"phone",
        capacity:"256",
        price:25000,
        image:"/images/iphone-red.jpg"
    },

]

export const getProductsObject = (array:ProductsProps[]) => array.reduce(
    (object, product) => ({
        ...object,
        [product.id]: product,
        
    }),
    {}
)


export default productsArray