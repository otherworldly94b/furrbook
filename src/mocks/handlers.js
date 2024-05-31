import { rest } from "msw";

const baseURL = "https://drf-api-ach-34946935b146.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "pk": 6,
        "username": "andreas4",
        "email": "",
        "first_name": "",
        "last_name": "",
        "profile_id": 6,
        "profile_image": "https://res.cloudinary.com/dgzf4ydy2/image/upload/v1/media/images/pexels-pixabay-50577_makqf5"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];