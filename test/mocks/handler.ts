import { http, HttpResponse } from "msw";
const data = [
  {
    id: 1,
    name: "Leanne Graham",
  },
  {
    id: 2,
    name: "Ervin Howell",
  },
];
export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", (datas) => {
    // ...and respond to them using this JSON response.
    console.log(datas);
    return HttpResponse.json(data);
  }),

  http.get("https://jsonplaceholder.typicode.com/users/:id", ({ params }) => {
    const id = params.id as string;

    const findpost = data.find((prod) => prod.id === parseInt(id));

    if (!findpost) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(findpost);
  }),
];
