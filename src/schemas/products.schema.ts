import { number, object, string } from 'yup';

const payload = {
    body: object({
        name: string().required('name is require!'),
        status: string(),
        sale: number().max(100).min(0),
        price: number().required('price is require!'),
        img: string().required('images is require!'),
        shortDescription: string().max(100),
        category: string()
    })
};

export const createProductSchema = object({
    ...payload
});

export const updateProductSchema = object({
    params: object({
        _id: string()
            .required('_id is require!')
    }),
    ...payload
});

export const destroyAndGetDeatailProductSchema = object({
    params: object({
        _id: string()
            .required('_id is require!')
    })
});
