const puppeteer = require("puppeteer");
const { finished } = require("stream");
async function extractData() {
  var browser = await puppeteer.launch({ headless: false });
  var page = await browser.newPage();
  await page.goto("https://github.com/trending");
  await page.waitForSelector(".Box-row");
  var popular_repos = await page.evaluate(function () {
    var reposElements = Array.from(document.getElementsByClassName("Box-row"));

    var repos = [];

    reposElements.forEach(function (repo) {
      var title = repo.querySelector("h1 a").textContent.trim();
      var description = repo.querySelector("p")?.textContent.trim();
      var url = `https://github.com${repo.querySelector('h1 a').getAttribute('href')}`;
      var stars = parseInt(repo.querySelector('a[href$="/stargazers"]').textContent.trim().replace(',', ''));
      var lang = (repo.querySelector('[itemprop="programmingLanguage"]')?.textContent || '').trim();
      repos.push({ title, description, url, stars, lang });
    });

    return repos;
  });
  console.log('Repositories:');
  console.log(JSON.stringify(popular_repos, null, 2));

  const fs = require('fs');

const saveData = (popular_repos)=>{
  const finished = (error) => {
      if(error){
          console.log(error);
          return;
      }
  }
  const jsonData = JSON.stringify(popular_repos, null, 2);
  fs.writeFile('data.json',jsonData,finished)
}
saveData(popular_repos);
}
extractData();
