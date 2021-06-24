import { createContext, useState } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { auth, firebase } from './services/firebase';

export const AuthContext = createContext({} as any);

function App() {

  // create state
  const [user, setUser] = useState();

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(resutl => {
      if(resutl.user) {
        const { displayName, photoURL, uid } = resutl.user;

        if(!displayName || !photoURL) {
          throw new Error('Missing information from Google Account')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        } as any);

      }

    })

  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user }}>
        <Route path="/" exact={true} component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
