import NextAuth from "next-auth/next";
import SpotfyProvider from 'next-auth/providers/spotify'

export default ApiRoute=()=>{
    Provider:[
        SpotfyProvider(
           {
            clientID:process.env.NEXTAUTH_PUBLIC_CLIENT_ID,
            clientSecret:process.env.NEXTAUTH_PUBLIC_CLIENT_SECRETE,
            authorization:LOGIN_URL
           }
        )
    ]
}