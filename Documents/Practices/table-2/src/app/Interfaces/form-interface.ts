export interface FormInterface {
    id: number;
    name: string;
    email: string;
    password: string;
    created_at: string;
    error: boolean;
    dresses: DressesInterface[];
}

export interface DressesInterface {
    img: string;
    pressing_name: string;
    location: string;
    open: string;
    iterms: ItermsInterface[]
}

export interface ItermsInterface {
    vetements: string;
    prix: number;
    nombre: string;
    total: string
}

export interface tableInterface {
    agence: string;
    name: string;
    number: string;
    entry_date: string;
    delivery_date: string
}
