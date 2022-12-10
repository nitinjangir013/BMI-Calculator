var height=0;
var weight=0;
var bmi=0;
var mitter=0;
const bmi_text=document.getElementById('bmi-text');
const resultDiv=document.getElementById('level');
function updateValue() {
  update_weight();
  update_height();
  mitter=height/100;
  bmi=weight/(mitter*mitter);
  bmi=bmi.toFixed(1);
  bmi_text.innerText=bmi;
  if(bmi>24.9){
    resultDiv.innerText="OVER-WEIGHT";
    resultDiv.style.color="red";
  }
  else if(bmi<24.9 && bmi>18.5){
    resultDiv.innerText="NORMAL";
    resultDiv.style.color="limegreen";
  }
  else{
    resultDiv.innerText="LOW-WEIGHT";
    resultDiv.style.color="orange";
  }
}

function update_weight()
{
  let rangeSlider = document.getElementById('range_slider');
  let target = document.getElementById('target1');
  target.innerText = rangeSlider.value;
  weight=rangeSlider.value;
}

function update_height()
{
  let rangeSlider1 = document.getElementById('range_slider2');
  let target1 = document.getElementById('target2');
  target1.innerText = rangeSlider1.value;
  height=rangeSlider1.value;
}