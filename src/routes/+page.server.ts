import type { PageServerLoad } from "./$types";
import { STATICFORM_API_KEY } from "$env/static/private";
export const prerender = false;

// export const load = (async () => {
//   return {};
// }) satisfies PageServerLoad;

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    formData.append("accessKey", STATICFORM_API_KEY);
    const data = new URLSearchParams();
    formData.forEach((value, key) => {
      data.append(key, value.toString());
    });

    const response = await fetch("https://api.staticforms.xyz/submit", {
      method: "POST",
      body: data,
    }).then((res) => res.json());
    // boolean value
    return response;
  },
};
