export class ProductService {
  constructor(productProvider) {
    this.productProvider = productProvider
  }

  async getTitles() {
    const result = await this.productProvider.getProducts()
    const count = result.data.reduce((acc, child) => {
      acc[child.userId] = (acc[child.userId] || 0) + 1
      return acc
    }, {})
    const arr = Object.values(count)
    const maxValue = Math.max(...arr)
    const newData = result.data
      .filter((i) => i.userId === maxValue)
      .map((e) => e.title)
    return newData
  }
}
