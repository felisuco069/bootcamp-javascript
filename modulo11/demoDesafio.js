const reservas = [
    {
        tipoHabitacion: "standard",
        pax: 1,
        noches: 3
    },
    {
        tipoHabitacion: "standard",
        pax: 1,
        noches: 4
    },
    {
        tipoHabitacion: "suite",
        pax: 2,
        noches: 1
    }
];

class reservePrice {
    constructor() {

        this._reserves = [];
        this._subtotal = 0;
        this._total = 0;
    }

    calculateSubtotal() {
        this._subtotal = this._reserves.reduce((acc, { tipoHabitacion, pax, noches }) =>
            acc + (this.ImportetipoHabitacion(tipoHabitacion) + (pax - 1) * 40) * noches, 0);
    }

    calculateTotal() {
        this._total = this._subtotal * 1.21;
    };

    get subTotal() {
        return this._subtotal;
    }

    get total() {
        return this._total;
    }

    set reserveList(list) {
        this._reserves = list;
        this.calculateSubtotal();
        this.calculateTotal();
    };

}

class reservePriceParticular extends reservePrice {
    ImportetipoHabitacion(tipoHabitacion) {
        switch (tipoHabitacion) {
            case "standard":
                return 100;
            case "suite":
                return 150;
            default:
                return 100;
        };
    }

}
class reservePriceTourOperator extends reservePrice {
    ImportetipoHabitacion() {
        return 100;
    };

    get subTotal() {
        return this._subtotal * 0.85;
    };

    get total() {
        return this._total * 0.85;
    };
}

console.log("**** Caso 1 ****");
const reservesParticular = new reservePriceParticular();
reservesParticular.reserveList = reservas;
console.log(`El subtotal de las reservas es de ${reservesParticular.subTotal} €`);
console.log(`El total de las reservas es de ${reservesParticular.total} €`)

console.log("**** Caso 2 ****");
const reservesTourOperator = new reservePriceTourOperator();
reservesTourOperator.reserveList = reservas;
console.log(`El subtotal de las reservas es de ${reservesTourOperator.subTotal} €`);
console.log(`El total de las reservas es de ${reservesTourOperator.total} €`);