import './App.css'
import { RouterProvider } from 'react-router'
import { router } from './navigation/routes'
import { useAtomValue, useSetAtom } from 'jotai';
import {  ProfileAtom, UserAtom } from './store/auth';
import { useEffect, useState } from 'react';
import { supabase } from './supabase';
import useGetProfileWithId from './hooks/use-get-profile-with-id';
import { Profile } from './types/types';


function App() {
  const setUser = useSetAtom(UserAtom);
  const setProfile = useSetAtom(ProfileAtom)
  const user = useAtomValue(UserAtom);

  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
      
      setLoading(false)
    });

    return () => subscription.unsubscribe();
  }, [setUser]);
  const userId = user?.user.id || "";
  const {data} = useGetProfileWithId({
    id: userId,
    
  });
  useEffect(() => {
    if(data){
      setProfile(data)
      console.log("profdata", data)
    }
  }, [data, setProfile])
console.log("user", user)

  if (loading) {
    return <div>Loading...</div>;
  }

  return <RouterProvider router={router} />;

}

export default App
