let _show1 = document.querySelector('.show_1')
let _show2 = document.querySelector('.show_2')
let _show3 = document.querySelector('.show_3')
let _show4 = document.querySelector('.show_4')

document.querySelector('.cardNumber_1').addEventListener('input', function () {
    let cardNumberVal = this.value
    // let cardLastChar = cardNumberVal.substr(-1)

    if (
        cardNumberVal.length < 4
    ) {
        _write1(cardNumberVal)
    } else if (
        cardNumberVal.length == 4
    ) {
        _write1(cardNumberVal)
        document.querySelector('.cardNumber_2').focus()
    } else {
        this.value = (this.value).substring(0, 4)
    }



})
function _write1(cardNumberVal) {
    let cardLastChar = cardNumberVal.substr(-1)
    _show1.innerHTML += cardLastChar
    _show1.style.color = 'white'
}

document.querySelector('.cardNumber_2').addEventListener('input', function () {
    let cardNumberVal = this.value
    // let cardLastChar = cardNumberVal.substr(-1)

    if (
        cardNumberVal.length < 4
    ) {
        _write2(cardNumberVal)
    } else if (
        cardNumberVal.length == 4
    ) {
        _write2(cardNumberVal)
        document.querySelector('.cardNumber_3').focus()
    } else {
        this.value = (this.value).substring(0, 4)
    }



})
function _write2(cardNumberVal) {
    let cardLastChar = cardNumberVal.substr(-1)
    _show2.innerHTML += cardLastChar
    _show2.style.color = 'white'
}

document.querySelector('.cardNumber_3').addEventListener('input', function () {
    let cardNumberVal = this.value
    let cardLastChar = cardNumberVal.substr(-1)

    if (
        cardNumberVal.length < 4
    ) {
        _write3(cardNumberVal)
    } else if (
        cardNumberVal.length == 4
    ) {
        _write3(cardNumberVal)
        document.querySelector('.cardNumber_4').focus()
    } else {
        this.value = (this.value).substring(0, 4)
    }



})
function _write3(cardNumberVal) {
    let cardLastChar = cardNumberVal.substr(-1)
    _show3.innerHTML += cardLastChar
    _show3.style.color = 'white'
}



document.querySelector('.cardNumber_4').addEventListener('input', function () {
    let cardNumberVal = this.value
    let cardLastChar = cardNumberVal.substr(-1)
    console.log(cardLastChar);
    if (
        cardNumberVal.length < 4
    ) {
        _write4(cardNumberVal)
    } else if (
        cardNumberVal.length == 4
    ) {
        _write4(cardNumberVal)
        document.getElementById('card_holder').focus()
    } else {
        this.value = (this.value).substring(0, 4)
    }



})
function _write4(cardNumberVal) {
    let cardLastChar = cardNumberVal.substr(-1)
    _show4.innerHTML += cardLastChar
    _show4.style.color = 'white'
}
// *****************cardNumber
// *************cardHolder
document.querySelector('.card_holder').addEventListener('input', function () {
    let _showName = document.querySelector('.show_name')
    let cardHolder = this.value
    let cardLastChar = cardHolder.substr(-1)
    _showName.innerHTML += cardLastChar
    _showName.style.color = 'white'

})
// **********cardHolder
// *************year
document.querySelector('.year').addEventListener('input', function () {
    let _showYear = document.querySelector('.show_year')
    let _year = this.value
    let cardLastChar = _year.substr(-1)

    if (
        _year.length < 2
    ) {
        _showYear.innerHTML += cardLastChar
        _showYear.style.color = 'white'
    } else if (
        _year.length == 2
    ) {
        _showYear.innerHTML += cardLastChar
        _showYear.style.color = 'white'
        document.querySelector('.month').focus()
    } else {
        this.value = (this.value).substring(0, 2)
    }


})
// *************month
document.querySelector('.month').addEventListener('input', function () {
    let _showMonth = document.querySelector('.show_month')
    let _month = this.value
    let cardLastChar = _month.substr(-1)

    if (
        _month.length < 2
    ) {
        _showMonth.innerHTML += cardLastChar
        _showMonth.style.color = 'white'
        
    }
    else if(_month.length == 2){
        _showMonth.innerHTML += cardLastChar
        _showMonth.style.color = 'white'
        document.querySelector('.cvv2').focus()

    } else {
        this.value = (this.value).substring(0, 2)
    }


})
// ************************
cvv2 = document.querySelector('.cvv2')
card = document.querySelector('.card')

cvv2.addEventListener('focus', function () {
    card.style.transform = 'perspective(800px)'
    card.style.transform = 'rotateY(180deg)'
})

cvv2.addEventListener('input', function () {
    let _showCvv2 = document.querySelector('.show_cvv2')
    let _cvv2 = this.value
    let cardLastChar = _cvv2.substr(-1)

    if (
        _cvv2.length <= 4
    ) {
        _showCvv2.innerHTML += cardLastChar
        _showCvv2.style.color = 'black'
        _showCvv2.style.transform = 'rotateY(180deg)'
    }
     else {
        this.value = (this.value).substring(0, 4)
    }


})

document.getElementById('card_back').addEventListener( 'click' , function(){
    document.getElementById('card_back').parentElement.style.transform='rotateY(0deg)'
    document.querySelector('.cardNumber_1').focus()
})

document.getElementById('card_front').addEventListener( 'click' , function(){
    document.getElementById('card_front').parentElement.style.transform='rotateY(180deg)'
    document.querySelector('.cvv2').focus()
})

