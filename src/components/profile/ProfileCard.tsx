'use client'
import { useUser } from "@auth0/nextjs-auth0";
const preferences=["love", "fantazy", "style"]
export default function ProfileCard(){
 const {user}=useUser();
    console.log(user);
    return (
         <div className="w-64 rounded-xl bg-white border border-gray-200 p-4 shadow-sm">
      <img
        src={user?.picture}
        alt={user?.name}
        className="w-16 h-16 rounded-full object-cover mx-auto"
      />

      <p className="mt-3 text-center text-sm font-semibold text-gray-900">
        {user?.name}
      </p>

      <p className="mt-1 text-center text-xs text-gray-500">
        {user?.nickname || user?.email}
      </p>
<div className="text-sm text-gray-600 text-center leading-relaxed">
  A passionate book lover who enjoys exploring new stories and ideas.
  Reading is a daily ritual, often finishing at least one book </div>

      <div className="mt-3 flex flex-wrap justify-center gap-1">
        {preferences.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    )


}