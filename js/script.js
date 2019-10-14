
let queryString = location.search;
// console.log(queryString);
// console.log(location);

if (location.search.includes("%2F")) {
  queryString = queryString.replace("%2F", "/");
  // console.log(queryString);
  history.pushState('', '', queryString);
}

const rgx = /([a-zA-Z\-0-9\/]+)/g;
// const regex = /(?<user>[\w]+)_(?<repo>[\S]+)_(?<file>[\S]+)/g;
// const match = regex.exec(queryString);
const match = queryString.match(rgx);
// console.log(match);

if(match) {

  const url = `https://raw.githubusercontent.com/${match[0]}/${match[1]}/master/${match[2]}.md`;
  // console.log(url);

  const slides = document.querySelector(".slides");
  slides.innerHTML = `
  <section data-markdown="${url}"
          data-separator-vertical="^\n\n"
          data-separator-notes="^Note:"
          data-charset="utf-8">
  </section>
  `;

  const title = document.querySelector("title");
  title.innerHTML = `${match[1]} ${match[2]}`;
}
