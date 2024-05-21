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

export interface CuponsGerais{
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