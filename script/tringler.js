function CalculatedTringleArea() {
    const tringleBasInput = document.getElementById('tringle-base');
    const tringleBase = tringleBasInput.value;
    const base = parseFloat(tringleBase);

    const tringleHightInput = document.getElementById('tringle-hight');
    const tringleHight = tringleHightInput.value;
    const hight = parseFloat(tringleHight);


    const area= 0.5 * base * hight;

    console.log(area);


    const tringleArea =document.getElementById('tringle-area');
    tringleArea.innerText = area;

}



// Rectangle


function CalculatedRectangleArea() {
    const RectangleBasInput = document.getElementById('Rectangle-base');
    const RectangleBas = RectangleBasInput.value;
    const base2 = parseFloat(RectangleBas);

    const RectangleHightInput = document.getElementById('Rectangle-hight');
    const RectangleHight = RectangleHightInput.value;
    const hight2 = parseFloat(RectangleHight);


    const area2= base2 * hight2;

    console.log(area2);


    const RectangleArea =document.getElementById('Rectangle-area');
    RectangleArea.innerText = area;



}



// Parallelogram
function calculatedParallelogramArea(){
    const baseParallelogramInput = document.getElementById('base-Parallelogram');
    const baseParallelogram = baseParallelogramInput.value;
    const base3=parseFloat(baseParallelogram);

    const wightParallelogramInput = document.getElementById('wight-Parallelogram');
    const wightParallelogram = wightParallelogramInput.value;
    const wight3=parseFloat(wightParallelogram);

    const area3= base3 * wight3;

    console.log(area3);

    const ParallelogramArea =document.getElementById('parallelogram-area');
    ParallelogramArea.innerText=area3;

}


// Rhombus


function CalculatedRhombuseArea() {
    const RhombusBasInput = document.getElementById('Rhombus-base');
    const RhombusBas = RhombusBasInput.value;
    const base4 = parseFloat(RhombusBas);

    const RhombusHightInput = document.getElementById('Rectangle-hight');
    const RhombusHight = RhombusHightInput.value;
    const hight4 = parseFloat(RhombusHight);


    const area4= 0.5 * base4 * hight4;

    console.log(area4);


    const RhombusArea =document.getElementById('Rhombus-area');
    RhombusArea.innerText = area4;



}

// pentagon


function CalculatedpentagonArea() {
    const PentagonBasInput = document.getElementById('Pentagon-base');
    const PentagonBas = PentagonBasInput.value;
    const base5 = parseFloat(PentagonBas);

    const PentagonHightInput = document.getElementById('Pentagon-hight');
    const PentagonHight = PentagonHightInput.value;
    const hight5 = parseFloat(PentagonHight);


    const area5=0.5 * base5 * hight5;

    console.log(area5);


    const PentagonArea =document.getElementById('Pentagon-area');
    PentagonArea.innerText = area5;



}

// Ellipse


function CalculatedEllipseArea() {
    const EllipseBasInput = document.getElementById('Ellipse-base');
    const EllipseBas = EllipseBasInput.value;
    const base6 = parseFloat(EllipseBas);

    const EllipseHightInput = document.getElementById('Ellipse-hight');
    const EllipseHight = EllipseHightInput.value;
    const hight6 = parseFloat(EllipseHight);

    const area6=3.1416 * base6 * hight6;

    console.log(area6);


    const EllipseArea =document.getElementById('Ellipse-area');
    EllipseArea.innerText = area6;



}