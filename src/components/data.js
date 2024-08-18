import { useEffect, useState } from "react";
import axios from "axios";
const [data, setData] = useState(null);
useEffect(() => {
  axios
    .get("https://example-data.draftbit.com/books?_limit=8")
    .then((response) => {
      setData(response.data);
    });
}, []);
return <div> </div>;

export default data;
