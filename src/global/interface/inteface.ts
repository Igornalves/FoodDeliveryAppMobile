export interface icon{
    name: string
    date: number
}

export interface TypeProductBestseller{
    TituleI: string,
    TextI: string,
    TextFeedI: string,
    PayI: string,
    DiscontI?: string,
    imageI?: string
}

export interface CuponsGeraisType{
    image: string,
    porcentagem: string,
    TituleCupon: string,
    SubText: string
}

export interface typeProductsOders {
    images: string,
    TextTitule1: string,
    TextTitule2: string,
    DateO: string,
    ItensO: string,
    DeliveredO?: string,
    PayO: string,
    IdOrderO: string
}

export interface TypeRestaurantNeabyProducts{
    imagesR: string,
    TextTituleR: string,
    TextIconLocationR: string,
    TextIconFeedR: string
    mostraDesconto?: boolean
}

export interface TopForPageTypes {
    TituleT: string,
    IconAccountT?: string
}

export interface PopNotificationType {
    ImageP: string,
    tituleP: string,
    subTxt1: string,
    subTxt2: string,
    timeP: string
}
