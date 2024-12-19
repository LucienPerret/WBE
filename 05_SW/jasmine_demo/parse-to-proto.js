//const { parseToProto } = require('../../parse-to-proto.js');
// describe('parseToProto', () => {
//     it('should parse JSON and link the prototype correctly', () => {
//         const proto = { category: 'animal' };
//         const json = '{"type":"cat","name":"Mimi","age":3}';
//         const obj = parseToProto(json, proto);

//         // Check if values have been parsed correctly
//         expect(obj.age).toBe(3);
//         expect(obj.name).toBe("Mimi");

//         // Check if prototype object was correctly linked
//         expect(obj.category).toBe('animal');
//     });

//     it('should throw an error for invalid JSON input', () => {
//         const proto = { category: 'animal' };
//         const invalidJson = '{"type":"cat","name":"Mimi","age":}'; 

//         // Check if error is thrown
//         expect(() => {
//             parseToProto(invalidJson, proto);
//         }).toThrowError(SyntaxError);
//     });

//     it('should return an empty object with the prototype if JSON is empty', () => {
//         const proto = { category: 'animal' };
//         const json = '{}';
//         const obj = parseToProto(json, proto);

//         // Check if prototype object has been correctly linked
//         expect(obj.category).toBe('animal');
//         expect(obj).toEqual(jasmine.any(Object));
//     });

//     it('should return a new object every time with correct prototype', () => {
//         const proto = { category: 'animal' };
//         const json = '{"type":"dog"}';
//         const obj1 = parseToProto(json, proto);
//         const obj2 = parseToProto(json, proto);

//         // Check if its unique objects
//         expect(obj1).not.toBe(obj2);
//         expect(obj1.category).toBe('animal');
//         expect(obj2.category).toBe('animal');
//     });
// });

let parseToProto = function(json,proto){
	obj = JSON.parse(json)
	Object.setPrototypeOf(obj,proto)
	return obj	
}
module.exports = { parseToProto }