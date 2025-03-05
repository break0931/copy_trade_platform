// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";



// import { connectMongoDB } from "../../../../../lib/mongodb";
// import User from "../../../../../models/user";
// import bcrypt from 'bcryptjs'
// const GOOGLE_CLIENT_ID=process.env.GOOGLE_CLIENT_ID;
// const GOOGLE_CLIENT_SECRET=process.env.GOOGLE_CLIENT_SECRET;



// const authOptions = {
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         }),
//         CredentialsProvider({
//           name: 'credentials',
//           credentials: {},
//           async authorize(credentials) {
           
//             const { email, password } = credentials;

//             try {

//                 await connectMongoDB();
//                 const user = await User.findOne({ email });

//                 if (!user) {
//                     return null;
//                 }

//                 const passwordMatch = await bcrypt.compare(password, user.password);

//                 if (!passwordMatch) {
//                     return null;
//                 }

//                 console.log(user);
//                 return user;

//             } catch(error) {
//                 console.log("Error: ", error)
//             }

//           }
//         })
//     ],
//     session: {
//         strategy: "jwt"
//     },
//     secret: process.env.NEXTAUTH_SECRET,
//     pages: {
//         signIn: "/login"
//     },
//     callbacks: {
//         async jwt({ token, user, account, profile, isNewUser }) {

//             if (user) {
//                 return {
//                     ...token,
//                     id: user._id,
//                     role: user.role
//                 }
//             }

//             return token
//         },
//         async session({ session, user, token }) {
//             return {
//                 ...session,
//                 user: {
//                     ...session.user,
//                     id: token.id,
//                     role: token.role
//                 }
//             }
//         }
//     }
// }

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST }





















// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";

// import { connectMongoDB } from "../../../../../lib/mongodb";
// import User from "../../../../../models/user";
// import bcrypt from 'bcryptjs';

// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

// const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {},
//       async authorize(credentials) {
//         console.log("Received credentials: ", credentials);
//         const { email, password } = credentials;
//         console.log(email,"   ",password)
//         try {
//           await connectMongoDB();
//           const user = await User.findOne({ email });

//           if (!user) {
//             return null;
//           }

//           const passwordMatch = await bcrypt.compare(password, user.password);
//           console.log("Password match:", passwordMatch);

//           if (!passwordMatch) {
//             return null;
//           }

//           console.log(user);
//           return user;
//         } catch (error) {
//           console.log("Error: ", error);
//         }
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     async signIn({ user, account, profile }) {
//         console.log(profile.email , "   "  , user.email  )
//       if (account.provider === "google") {
//         // User signed in for the first time with Google
//         try {
//             // Connect to MongoDB
//             await connectMongoDB();
//             const existingUser = await User.findOne({ email: user.email });

//             // If user doesn't exist, they are a new user
//             if (!existingUser) {
               
//                 // Create a new user in the database
//                 const newUser = new User({
//                 email: user.email,
//                 name: user.name,
//                 role: "user", // You can define roles like 'user', 'admin', etc.
//                 });

//                 // Save the new user to the database
//                 await newUser.save();
//             } 
//         } catch (error) {
//           console.log("Error creating new user: ", error);
//           return false; // Return false if there is an error
//         }
//       }
//       return true; // Proceed with the sign-in process
//     },
//     async jwt({ token, user, account, profile, isNewUser }) {
//       if (user) {
//         return {
//           ...token,
//           id: user._id,
//           role: user.role,
//         };
//       }
//       return token;
//     },
//     async session({ session, user, token }) {
//       return {
//         ...session,
//         user: {
//           ...session.user,
//           id: token.id,
//           role: token.role,
//         },
//       };
//     },
   
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

















import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";



import { connectMongoDB } from "../../../../../lib/mongodb";
import User from "../../../../../models/user";
import bcrypt from 'bcryptjs'
const GOOGLE_CLIENT_ID=process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET=process.env.GOOGLE_CLIENT_SECRET;



const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
          name: 'credentials',
          credentials: {},
          async authorize(credentials) {
           
            const { email, password } = credentials;

            try {

                await connectMongoDB();
                const user = await User.findOne({ email });

                if (!user) {
                    return null;
                }

                const passwordMatch = await bcrypt.compare(password, user.password);

                if (!passwordMatch) {
                    return null;
                }

                console.log("user" , user);
                return user;

            } catch(error) {
                console.log("Error: ", error)
            }

          }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            console.log("Google sign-in profile:", profile);
            console.log("Google sign-in user:", user);
        
            if (account.provider === "google") {
                try {
                    await connectMongoDB();
                    
                    // Check if user already exists
                    const existingUser = await User.findOne({ email: user.email });
                    console.log("Existing user:", existingUser);
        
                    // If the user does not exist, create a new one
                    if (!existingUser) {
                        const newUser = new User({
                            email: user.email,
                            name: user.name,
                            role: "user", // Assign default role
                            provider: "google", // Mark this as a Google user
                        });
        
                        await newUser.save();
                        console.log("New Google user saved:", newUser);
                    } else {
                        console.log("User already exists, skipping creation.");
                    }
                } catch (error) {
                    console.log("Error creating new Google user:", error);
                    return false; // Prevent sign-in if there's an error
                }
            }
        
            return true; // Continue the sign-in process
        },
        async jwt({ token, user }) {
            if (user) {
                return {
                    ...token,
                    id: user.id || user._id?.toString(), // Ensure the ID is stored correctly
                    role: user.role || "user", // Default role
                };
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                return {
                    ...session,
                    user: {
                        ...session.user,
                        id: token.id,
                        role: token.role,
                    },
                };
            }
            return session;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }







