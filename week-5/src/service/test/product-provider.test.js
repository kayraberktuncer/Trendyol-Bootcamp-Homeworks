import axios from 'axios'
import { ProductProvider } from '../product-provider'

jest.mock('axios')

describe('ProductProvider', () => {
  it('should return products', async () => {
    const productProvider = new ProductProvider()
    axios.get.mockImplementation(() => {
      return Promise.resolve({
        data: [
          {
            userId: 1,
            id: 1,
            title:
              'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
          },
          {
            userId: 2,
            id: 15,
            title: 'eveniet quod temporibus',
            body: 'reprehenderit quos placeat velit minima officia dolores impedit repudiandae molestiae nam voluptas recusandae quis delectus officiis harum fugiat vitae',
          },
          {
            userId: 3,
            id: 15,
            title: 'eveniet quod temporibus',
            body: 'reprehenderit quos placeat velit minima officia dolores impedit repudiandae molestiae nam voluptas recusandae quis delectus officiis harum fugiat vitae',
          },
        ],
      })
    })
    expect(await productProvider.getProducts()).toEqual([
      {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        userId: 2,
        id: 15,
        title: 'eveniet quod temporibus',
        body: 'reprehenderit quos placeat velit minima officia dolores impedit repudiandae molestiae nam voluptas recusandae quis delectus officiis harum fugiat vitae',
      },
      {
        userId: 3,
        id: 15,
        title: 'eveniet quod temporibus',
        body: 'reprehenderit quos placeat velit minima officia dolores impedit repudiandae molestiae nam voluptas recusandae quis delectus officiis harum fugiat vitae',
      },
    ])
  })

  it('should return network error', async () => {
    const productProvider = new ProductProvider()
    axios.get.mockImplementation(() => {
      return Promise.reject('network error')
    })
    expect(await productProvider.getProducts()).toBe('network error')
  })
})
