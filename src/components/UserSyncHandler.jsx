import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import toast from "react-hot-toast";
import { AppContext } from "../context/AppContext";

const UserSyncHandler = () => {
    const {isLoaded, isSignedIn, getToken} = useAuth();
    const {user} = useUser();
    const [synced, setSynced] = useState(false);
    const {backendUrl,loadUserCredits} = useContext(AppContext);

    useEffect(() => {
        const saveUser = async () => {
            if(!isLoaded || !isSignedIn || synced) return;

            try{
                const token = await getToken();
                
                const userData = {
                    clerkId: user.id,
                    email: user.primaryEmailAddress?.emailAddress,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    photoUrl: user.imageUrl || "",
                };
                
                await axios.post(
                    `${backendUrl}/users`, 
                    userData, 
                    {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    }
                );
                
                setSynced(true);
                await loadUserCredits();
            }
            catch(error){
                console.error("Error syncing user:", error);
                toast.error("Failed to sync user");
            }
        }
        saveUser();

    },[isLoaded, isSignedIn, user, synced, getToken, backendUrl]);

    return null;
}

export default UserSyncHandler;