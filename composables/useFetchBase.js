const csrf_cookie = "XSRF-TOKEN";


export const useFetchBase = (request, opts) => {
    const config = useRuntimeConfig()

    let token = useCookie(csrf_cookie)?.value;

    const headers = {
      Accept: "application/json",
      "Cache-Control": "no-cache",
      "X-XSRF-TOKEN": token,
    };

    return useFetch(request, { baseURL: config.public.apiBase, credentials: 'include', headers,  ...opts })
  }