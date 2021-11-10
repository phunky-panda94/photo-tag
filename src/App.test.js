import { getRandomNamesList, randomise } from './App';
import coordinates from './Coordinates';

describe('getRandomNamesList', () => {

    test('returns list with person and 4 random names', () => {
  
        // Arrange
        let person = coordinates[0][2]
        
        // Act
        let list = getRandomNamesList(person);
    
        // Assert
        expect(list.length).toBe(5);
    
    });

    test('contains 5 unique names', () => {
  
        // Arrange
        let person = coordinates[0][2]
        
        // Act
        let list = getRandomNamesList(person);
        let set = new Set(list)
    
        // Assert
        expect(set.size).toBe(5);
    
    });

}); 

describe('randomise', () => {

    test('returns randomised list', () => {

        let myList = ['a','b','c','d','e'];
        randomise(myList);

        let randomised = false
        if (myList[0] !== 'a' || myList[1] !== 'b' || myList[2] !== 'c' || myList[3] !== 'd' || myList[4] !== 'e') {
            randomised = true;
        }

        expect(randomised).toBe(true);

    })

})




