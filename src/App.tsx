import './App.css'
import { RouterProvider } from 'react-router'
import { router } from './navigation/routes'
import { useAtomValue, useSetAtom } from 'jotai';
import {  UserAtom } from './store/auth';
import { useEffect, useState } from 'react';
import { supabase } from './supabase';


function App() {
  const setUser = useSetAtom(UserAtom);
  const user = useAtomValue(UserAtom);

  const [loading, setLoading] = useState(true);

  // useGetSession((session) => {
  //   if (session) {
  //     setUser(session);
  //   }
  //   setLoading(false);
  // });
  
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
      setLoading(false)
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

console.log("user", user)

  if (loading) {
    return <div>Loading...</div>;
  }

  return <RouterProvider router={router} />;

}

export default App
