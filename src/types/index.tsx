export interface Good {
    id: number;
    title: string;
    price: number;
    quantity: number;
    thumbnail: string;
    description: string;
}

export interface GetGoodsResponse {
    data: Good[];
}