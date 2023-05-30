import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

// import OrderNow from "../OrderNow";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Welcome, you are signed in as ${authUser.email}`}</p>
          <button><a href="/ordernow">Order Now</a></button>
          <p>or</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
          <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;