let length;
let width;
let area;

const calculateArea = () =>  {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}
