import { ProductProvider } from '../product-provider'
import { ProductService } from '../product-service'

jest.mock('../product-provider')

describe('ProductService', () => {
  const productProvider = new ProductProvider()
  const productService = new ProductService(productProvider)
  const posts = [
    {
      userId: 1,
      id: 1,
      title: 'title 1',
      body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 2,
      id: 2,
      title: 'title 2',
      body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
      userId: 2,
      id: 2,
      title: 'title 3',
      body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
      userId: 3,
      id: 2,
      title: 'title 4',
      body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
    },
  ]

  it('should return titles of user who post most', async () => {
    productProvider.getProducts.mockImplementation(() => {
      return Promise.resolve({
        data: posts,
      })
    })

    expect(await productService.getTitles()).toEqual(['title 2', 'title 3'])
  })
})
