const user = {
    name: "Mariana",
    transictions: [],
    balance: 0
};

function createtransiction(transiction) {
    user.transictions.push(transiction)

    if (transiction.type === 'credit') {
        user.balance = user.balance + transiction.value
    } else {
        user.balance = user.balance - transiction.value
    }
}

// Relatórios
function getHighertransictionByType(type) {
    let highertransiction
    let higherValue = 0

    for (let transiction of user.transictions) {
        if (transiction.type == type && transiction.value > higherValue) {
            higherValue = transiction.value
            highertransiction = transiction
        }
    }

    return highertransiction
}

function getAveragetransictionValue() {
    let sum = 0

    for(let transiction of user.transictions) {
        sum += transiction.value
    }

    return sum / user.transictions.length
}

function gettransictionsCount() {
    let count = {
        credit: 0,
        debit: 0,
    }
    for (let transiction of user.transictions) {
        if (transiction.type === 'credit')
            count.credit++
        else
            count.debit++
    }

    return count
}


createtransiction({ type: 'credit', value: 50 })
createtransiction({ type: 'credit', value: 120 })
createtransiction({ type: 'debit', value: 80 })
createtransiction({ type: 'debit', value: 30 })

console.log(user.balance) // 60

console.log(getHighertransictionByType('credit')) // { type: 'credit', value: 120 }
console.log(getHighertransictionByType('debit')) // { type: 'debit', value: 80 }

console.log(getAveragetransictionValue()) // 70

console.log(gettransictionsCount()) // { credit: 2, debit: 2 }