import React from "react";
import { useRequest } from "ahooks";

export default () => {
  const { data, loading } = useRequest("https://randomuser.me/api", {
    formatResult: (res: any) => {
      console.log('formatResult', res);
      return res?.results[0]?.email;
    }
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return <p>email: {data}</p>;
};
