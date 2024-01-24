export interface pcDataType {
    id: number,
    type: string,
    imgURL: string,
    name: string,
    info: string[],
    discountInfo: {
        originalPrice: string,
        discountPrice: string,
        monthlyPrice: string,
        deliveryDate: string
    }
}
