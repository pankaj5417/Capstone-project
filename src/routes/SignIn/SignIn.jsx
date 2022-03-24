import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase"

export const SignIn=()=>{
    const logGoogleUser=async ()=>{
        const {user}=await signInWithGooglePopup()
        //console.log(user)
        const userDocRef= await  createUserDocumentFromAuth(user)
       
    }
    return (
        <>
        <div>
            <h1>SignIn page</h1>
            <button onClick={logGoogleUser}>Sign In with Google</button>
        </div>
        </>
    )
}