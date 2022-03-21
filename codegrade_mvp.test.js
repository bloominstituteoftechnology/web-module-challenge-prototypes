import functions from './index';

describe('fooFunction', ()=>{
    it('foo returns foo', ()=>{
        expect(functions.foo()).toBe('bar');
    })
});

describe('Instances of Person', () => {
    let neo
    const foods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    beforeEach(() => {
      neo = new functions.Person('Neo', 20)
    })
    it('initialize with the given name', () => {
      expect(neo.name).toBe('Neo')
    })
    it('initialize with the given age', () => {
      expect(neo.age).toBe(20)
    })
    it('initialize with an empty stomach', () => {
      expect(neo.stomach).toEqual([])
      expect(neo.stomach.length).toBe(0)
    })
    it('get eat, poop and toString methods from their prototype', () => {
      expect(neo.__proto__.eat).toBeDefined();
      expect(neo.__proto__.poop).toBeDefined();
      expect(neo.__proto__.toString).toBeDefined();
    })
    it('can eat up to 10 foods', () => {
      foods.forEach(item => neo.eat(item))
      foods.forEach(item => expect(neo.stomach).toContain(item))
    })
    it('can eat no more than 10 foods', () => {
      foods.forEach(item => neo.eat(item))
      neo.eat(11)
      expect(neo.stomach).not.toBe(11)
    })
    it('can poop to empty stomach', () => {
      foods.forEach(item => neo.eat(item))
      neo.poop()
      expect(neo.stomach.length).toEqual(0)
    })
    it('can state name and age', () => {
      const str = neo.toString()
      expect(str).toContain('Neo')
      expect(str).toContain(20)
    })
  })
  
  //car
  describe('Instances of Car', () => {
    let batmobile
    beforeEach(() => {
      batmobile = new functions.Car('BatMobile', 20)
    })
    it('initialize with the given model', () => {
      expect(batmobile.model).toBe('BatMobile')
    })
    it('initialize with the given milesPerGallon', () => {
      expect(batmobile.milesPerGallon).toEqual(20)
    })
    it('initialize with an empty tank', () => {
      expect(batmobile.tank).toEqual(0)
    })
    it('initialize with an odometer at 0 miles', () => {
      expect(batmobile.odometer).toEqual(0)
    })
    it('get fill methods from their prototype', () => {
      expect(batmobile.__proto__.fill).not.toBeUndefined();
    })
    it('fill method increases the tank by the given gallons', () => {
      batmobile.fill(10)
      expect(batmobile.tank).toEqual(10)
      batmobile.fill(10)
      expect(batmobile.tank).toEqual(20)
    })
  })
  
  describe('Instances of Baby', () => {
    let baby
    beforeEach(() => {
      baby = new functions.Baby('Lucy', 5, 'trains')
    })
    it('initialize with the given name', () => {
      expect(baby.name).toBe('Lucy')
    })
    it('initialize with the given age', () => {
      expect(baby.age).toEqual(5)
    })
    it('initialize with the given favorite toy', () => {
      expect(baby.favoriteToy).toBe('trains')
    })
    it('get a play method from their prototype', () => {
      expect(baby.__proto__.play).not.toBeUndefined();
    })
    it('can play with favorite toy', () => {
      expect(baby.play()).toContain('trains')
    })
    it('inherit the methods on Person.prototype', () => {
      expect(baby.__proto__.eat).not.toBeUndefined();
    })
    it('inherit the methods on Person.prototype', () => {
        expect(baby.__proto__.poop).not.toBeUndefined();
      })
  })

