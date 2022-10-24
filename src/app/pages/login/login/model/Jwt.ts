export interface JWt{
    DataUser: {
        id: number,
        name: string,
        email:string,
        accessToken: string,
        expiresIn: string
    }
}