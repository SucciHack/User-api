import { fetchUsers } from "@/actions/actions";
import Image from "next/image";
import CreateButton from "./createbutton";
import Delete from "./delete";
import Edit from "./edit";
import { ModeToggle } from "./modeToggle";

export default async function UserGrid() {
    const userData = await fetchUsers()

    return (
      <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-8 mx-auto dark:gray-900">
        <div className="max-w-6xl mx-auto">
        <div className="mb-2">
          <ModeToggle/>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex justify-center items-center bg-white/75 rounded-lg shadow-lg dark:bg-gray-900/70">
            <CreateButton/>
          </div>
            {
                userData?.map((user)=>{
                    return(
                        <div key={user.email} className="bg-white rounded-lg p-6 shadow-lg dark:bg-gray-900 dark:text-white">
                <div className="flex justify-between items-start mb-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src="/placeholder.png"
                      alt="name"
                      className="rounded-full object-cover w-full h-full"
                      fill
                    />
                  </div>
                  <div className="flex gap-2 items-center justify-center">
                    <Delete id= {user.id}/>
                    <Edit/>
                  </div>
                </div>
                <div className="flex gap-2">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{user.firstName}</h3>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{user.lastName}</h3>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{user.phoneNumber}</div>
                    <div>{user.address}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{user.email}</div>
                  </div>
                </div>
              </div>
                    )
                })
            }
          </div>
        </div>
      </div>
    )
  }
  
  