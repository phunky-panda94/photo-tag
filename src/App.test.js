import { getRandomNamesList } from './App';
import coordinates from './Coordinates';

describe('getRandomNamesList function', () => {

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




