
const API = "http://localhost:3000/api/v1/users"
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
