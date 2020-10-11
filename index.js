let saldo  = 0, totalesIncome = 0, totalesExpenses = 0, i = 0;

const mostrarValue = () => {

    const valueHTML = () => {
        return `
        <div class="budget">
          <div class="budget__title">
              Available Budget in <span class="budget__title--month">November 2020</span>:
          </div>

          <div class="budget__value">${saldo}</div>

          <div class="budget__income clearfix">
              <div class="budget__income--text">Income</div>
              <div class="right">
                  <div class="budget__income--value">+ ${totalesIncome}</div>
                  <div class="budget__income--percentage">&nbsp;</div>
              </div>
          </div>

          <div class="budget__expenses clearfix">
              <div class="budget__expenses--text">Expenses</div>
              <div class="right clearfix">
                  <div class="budget__expenses--value">- ${totalesExpenses}</div>
                  <div class="budget__expenses--percentage">&nbsp;</div>
              </div>
          </div>
        </div>
        `;
    };


    const div = document.querySelector('.top')
    div.innerHTML = valueHTML();
}


const agregarMonto = () => {

    const list = (id, type) => {
        return `
        <div class="item clearfix" id=${id}>
            <div class="item__description">${description}</div>
            <div class="right clearfix">
                <div class="item__value">${type} ${value}</div>
                <div class="item__delete">
                    <button class="item__delete--btn" onclick="removeSaldo(${id})">
                        <i class="ion-ios-close-outline"></i>
                    </button>
                </div>
            </div>
        </div>
        `;
    };

    let description = document.querySelector('.add__description').value;
    let value = document.querySelector('.add__value').value;
    value = parseInt(value);
    let type = document.querySelector('.add__type').value;
    i++
    
    if (description === '' || value === NaN) {
        return false;
    }

    if (type === 'inc') {
        const divIncome = document.querySelector('.income__list')
        divIncome.innerHTML += list(i, '+');
        saldo += value;
        totalesIncome += value;
    } else {
        const divExp = document.querySelector('.expenses__list')
        divExp.innerHTML += list(i, '-');
        saldo -= value;
        totalesExpenses += value;
    }
    mostrarValue();
}

mostrarValue();

const removeSaldo = id => {
    document.getElementById(id).remove();
}