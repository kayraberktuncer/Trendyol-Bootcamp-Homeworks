import { divide, toPascalCase } from '../func'

describe('bootcamp()', () => {
  describe('divide()', () => {
    it('should divide', () => {
      expect(divide(10, 4)).toBe(2.5)
    })

    it('should throw error when dividend is not a number', () => {
      expect(() => divide('NaN', 3)).toThrow('Invalid argument!')
    })

    it('should throw error when divisor is not a number', () => {
      expect(() => divide(10, 'NaN')).toThrow('Invalid argument!')
    })

    it('should throw error when divisor is zero', () => {
      expect(() => divide(10, 0)).toThrow('Divide by zero!')
    })
  })

  describe('toPascalCase()', () => {
    it('should make uppercase first letter of given word', () => {
      expect(toPascalCase('bootcamp')).toBe('Bootcamp')
    })

    it('should make uppercase first letter of given word', () => {
      expect(toPascalCase('')).toBe('')
    })

    it('should all sentences start with a capital letter.', () => {
      const sentence = 'test title'
      expect(toPascalCase(sentence)).toBe('Test Title')
    })
  })
})
