import React, { useEffect, useState } from "react";

/*
HOC(Higher Order Component)
컴포넌트 로직 재사용 패턴!

- 컴포넌트에 props를 추가해주거나
- 컴포넌트 렌더링 전에 어떤 로직을 처리하거나

특히 그 props를 추가해주거나 로직을 처리하는 것을 재사용할 때 사용!
*/

export default function widthUser(Component, callbackFn) {
  return function WrappedComponent({ userId, ...props }) {
    // const result = callbackFn();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function fetchUser() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userData = await response.json();
        setUser(userData);
        setLoading(false);
      }

      setTimeout(() => fetchUser(), 3000);
    }, [userId]);

    if (loading) {
      return <p>Loading user...</p>;
    }

    return <Component user={user} {...props} />;
  };
}
