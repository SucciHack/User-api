'use client'
import { Loader } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";

export type UserData = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
    comfirmPassword: string,
    address: string,
    postCode: string,
}
export default function RegisterForm() {
  const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
      } = useForm<UserData>()
      const password = watch("password");
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

     async function onSubmit(data:UserData){
        setLoading(true)
        try {
          const response = await fetch(`${baseUrl}/api/v1/users`, {
            method: 'POST', 
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        setLoading(false)
        toast.success("created successfully")
        window.location.reload()
          reset()
        } catch (error) {
          setLoading(false)
          toast.error("created successfully")
        }
    }


    return (
      <div className="max-w-3xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-medium text-gray-800 mb-2">Register</h1>
        </div>
  
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name<span className="text-red-500">*</span>
              </label>
              <input {...register("firstName", {required:true})} type="text" placeholder="Enter your first name" className="w-full p-2 border rounded-md placeholder:text-gray-500/50 text-black/60" />
              {errors.firstName && <span className="text-xs text-red-800/80">Field is required</span>}
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name<span className="text-red-500">*</span>
              </label>
              <input {...register("lastName", {required:true})} type="text" placeholder="Enter your last name" className="w-full p-2 border rounded-md placeholder:text-gray-500/50 text-black/60" />
              {errors.lastName && <span className="text-xs text-red-800/80">Field is required</span>}
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input {...register("email", {required:true})} type="email" placeholder="Enter your email address" className="w-full p-2 border rounded-md placeholder:text-gray-500/50 text-black/60" />
              {errors.email && <span className="text-xs text-red-800/80">Field is required</span>}
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input {...register("phoneNumber", {required:true})} type="tel" placeholder="Enter your phone number" className="w-full p-2 border rounded-md placeholder:text-gray-500/50 text-black/60" />
              {errors.phoneNumber && <span className="text-xs text-red-800/80">Field is required</span>}
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password<span className="text-red-500">*</span>
              </label>
              <input {...register("password", { required: "Password is required" })} type="password" placeholder="Enter your password" className="w-full p-2 border rounded-md placeholder:text-gray-500/50 text-black/60" />
              {errors.password && <span className="text-xs text-red-800/80">Field is required</span>}
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <input {...register("comfirmPassword", {
            required: "Confirm Password is required",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}type="password" placeholder="Enter your Confirm password" className="w-full p-2 border rounded-md placeholder:text-gray-500/50 text-black/60" />
              {errors.comfirmPassword && <span className="text-xs text-red-800/80">passwords mismatch</span>}
            </div>
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input {...register("address", {required:true})} type="text" placeholder="Address Line 1" className="w-full p-2 border rounded-md placeholder:text-gray-500/50 text-black/60" />
            {errors.address && <span className="text-xs text-red-800/80">Field is required</span>}
          </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Post Code</label>
              <input {...register("postCode", {required:true})} type="text" placeholder="Post Code" className="w-full p-2 border rounded-md placeholder:text-gray-500/50 text-black/60" />
            </div>
  
          <div className="flex items-center justify-between pt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Login
              </a>
            </p>
            {
              loading ?(
                    <button type="submit" className="px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 flex gap-2">
                  <Loader className="animate-spin"/>
                  Loading...
                  </button>
              ):(
                <button type="submit" className="px-6 py-2 bg-gray-700/50 text-white rounded-md hover:bg-gray-800 flex gap-2">
                  Register
                  </button>
              )
            }
          </div>
        </form>
      </div>
    )
  }
  
  