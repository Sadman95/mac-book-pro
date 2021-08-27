/* got Base price */
const basePrice = document.getElementById('base-price');
const basePriceValue = parseInt(basePrice.innerText);

/* Total update */
const total = document.getElementsByClassName('total');
function totalPriceAdd() {
    for (const totalPrice of total) {
        let totalValue = totalPrice.innerText;
        totalValue = basePriceValue + parseInt(memoryPrice.innerText) + parseInt(storagePrice.innerText) + parseInt(deliveryCharge.innerText);
        totalPrice.innerText = totalValue;
    }
}

/* Price check */
function priceCheck(checkPrice) {
    if (checkPrice.innerText == 0 || checkPrice.innerText == 20 || checkPrice.innerText == 100 || checkPrice.innerText == 180) {
        totalPriceAdd();
    }
}

/* Memory section */
const memoryPrice = document.getElementById('memory-price');
const memory8 = document.getElementById('memory-minus');
const memory16 = document.getElementById('memory-add');
memory8.addEventListener('click', function () {
    memoryPrice.innerText = 0;
    priceCheck(memoryPrice);
})

memory16.addEventListener('click', function () {
    memoryPrice.innerText = 180;
    priceCheck(memoryPrice);
})

/* Storage section */
const storagePrice = document.getElementById('storage-price');
const storage256 = document.getElementById('storage-min');
const storage512 = document.getElementById('storage-mid');
const storage1TB = document.getElementById('storage-max');

storage256.addEventListener('click', function () {
    storagePrice.innerText = 0;
    priceCheck(storagePrice);
})

storage512.addEventListener('click', function () {
    storagePrice.innerText = 100;
    priceCheck(storagePrice);
})

storage1TB.addEventListener('click', function () {
    storagePrice.innerText = 180;
    priceCheck(storagePrice);
})


/* Delivery section */
const deliveryCharge = document.getElementById('delivery-charge');
const deliveryRegular = document.getElementById('delivery-regular');
const deliveryFast = document.getElementById('delivery-fast');

deliveryRegular.addEventListener('click', function () {
    deliveryCharge.innerText = 0;
    priceCheck(deliveryCharge);
})

deliveryFast.addEventListener('click', function () {
    deliveryCharge.innerText = 20;
    priceCheck(deliveryCharge);
})


/* Total final */
const totalFinal = document.getElementById('total-final');
const totalFinalValue = parseInt(totalFinal.innerText);
const couponInput = document.getElementById('code-input');
const applyBtn = document.getElementById('btn-apply');



/* apply button click functionality */
applyBtn.addEventListener('click', function(){
    if(couponInput.value == 'stevekaku'){
        totalFinal.innerText = parseInt(totalFinal.innerText) - parseInt(totalFinal.innerText)*0.2;
        couponInput.value = '';
    }
})

/* apply btn disable to enable */
couponInput.addEventListener('keyup',function(event){
    if(event.target.value == 'stevekaku'){
        applyBtn.removeAttribute('disabled');
    }
})



