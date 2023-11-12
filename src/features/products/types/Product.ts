export default interface Product {
  id?: number | undefined
  title: string
  description: string
  price: number | string
  brand: string
  category: string
  thumbnail?: string
  image: string
}
