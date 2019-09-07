const add = (a,b) => a + b ;
const generateGreeting = (name ='Anonymous')=>`Hello ${name}!`;

test ('should add two numbers',() => {
  const result = add(9,6);
  expect(result).toBe(15);
});

test ('should consider genralGreeting',() => {
   const result = generateGreeting('Insane');
   expect(result).toBe(`Hello Insane!`)
});

test('should generate greeting for no name',() => {
   const result = generateGreeting();
   expect(result).toBe(`Hello Anonymous!`);
});