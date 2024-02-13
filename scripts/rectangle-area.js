function calculateRectangleArea(){
    // get width of the rectangle
    const rectWidth = document.getElementById('rect-width');
    const rectWidthInput = rectWidth.value;
    const width = parseFloat(rectWidthInput);
    console.log(width);
    
    // get length of the rectangle
    const rectLength = document.getElementById('rect-length');
    const rectLengthInput = rectLength.value;
    const length = parseFloat(rectLengthInput);
    console.log(length);

    // count the area
    const area = length * width;
    console.log(area);
    
    // set the calculated area to the website using innerText
    const rectArea = document.getElementById('rect-area');
    if(typeof area !== 'number' || isNaN(area)){
        rectArea.innerText = 'invalid';
    } else{
        rectArea.innerText = area;
    }
 
}