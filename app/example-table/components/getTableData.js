import axios from "axios";

export const getTableData = async ({ page, pageSize }) => {
  const { data } = await axios.get(
    `https://myeik-discover-server.vercel.app/api/v1/category?page=${page+1}&pageSize=${pageSize}`,
    {
      headers: {
        Authorization:
          `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
      },
    }
  );
  console.log(data);
  return data;
};
