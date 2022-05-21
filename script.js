function GET_CURR_API() {
    let url = "./db.json"
    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            let main = document.querySelector("#main")

            var currency = data.exchangeRate.map((curr) => {
                return '<div class="currBlock">' +
                '<div class="currBlock__id">' +
                    '<p class="currBlock__id-baseCurr"> ' + curr.baseCurrency + '</p>' +
                    '<p class="currBlock__id-curr"> ' + curr.currency + '</p>' +
                '</div>' +
                '<div class="currBlock__rate__nd">' +
                    '<p class="currBlock__rate__nd-baseCurr">Sale Rate(ND): ' + curr.saleRateNB + '</p>' +
                    '<p class="currBlock__rate__nd-curr">Purchase Rate(ND): ' + curr.purchaseRateNB + '</p>' +
                '</div>' +
                '<div class="currBlock__rate">' +
                    '<p class="currBlock__rate-baseCurr">Sale Rate: ' + curr.saleRate + '</p>' +
                    '<p class="currBlock__rate-curr">Purchase Rate: ' + curr.purchaseRate + '</p>' +           
                '</div>' +
            '</div>'
            })
            main.insertAdjacentHTML("afterbegin", currency.join(' '))
        })
}

GET_CURR_API()