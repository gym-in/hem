/* global instantsearch */
app({
  appId: "XD3680V5CQ",
  apiKey: "0892c80cb2ddc5d330d00df7d5a35884",
  indexName: "Klasslista"
});

function app(opts) {
  const search = instantsearch({
    appId: opts.appId,
    apiKey: opts.apiKey,
    indexName: opts.indexName,
    urlSync: true,
  });
  search.addWidget(instantsearch.widgets.searchBox({
    container: "#search-input"
  }));
  search.addWidget(instantsearch.widgets.hits({
    container: "#hits",
    hitsPerPage: 5,
    templates: {
      item: document.getElementById("hit-template").innerHTML,
      empty: "<em>{{query}}</em> gav inget"
    }
  }));
  search.addWidget(instantsearch.widgets.pagination({
    container: "#pagination"
  }));
  search.start();
}