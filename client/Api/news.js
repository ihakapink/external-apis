import request from "superagent";

const url =
  "https://newsapi.org/v2/everything?q=bitcoin&from=2019-03-17&sortBy=publishedAt&apiKey=";

const token = "a32e2786b1af43f3be14ef1ea972fe93";

export function getNews() {
  return request.get(`${url}${token}`).then(res => {
    return res.body.articles;
  });
}
