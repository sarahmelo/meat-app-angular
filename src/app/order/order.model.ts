class OrderModel {
    constructor(
        public address: string,
        public number: number,
        public optionalAdress: string,
        public paymentOption: string,
        public orderItems: OrderItem[] = []
    ){}
}

class OrderItem {
    constructor(private quantity: number, private menuId: string){}
}

export { OrderItem, OrderModel }