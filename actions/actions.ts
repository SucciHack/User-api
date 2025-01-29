const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
const API = `${baseUrl}/api/v1/users`
export async function fetchUsers() {
    try {
        const res = await fetch(API)
        const users = await res.json()
        return users.users as users[]
    } catch (error) {
        console.log(error)
    }
}
export type users  ={
    id:string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
    comfirmPassword: string,
    address: string,
    postCode: string,
}
