# Creating the search index

Algolia runs a Docsearch free program, where they manage and host and update the search index for your documentation for you, for free.

That program is by application only and takes at least two weeks. In the mean time, they have a (legacy) option to run your own scraper, as documented [here](https://docsearch.algolia.com/docs/legacy/run-your-own).

In either case, Algolia hosts the index on their servers. The (frontend-only) docs site can then fetch search data from Algolia's servers and return relevant search results to the user. The difference is that if accepted into the programme
then Algolia also takes care of regularly scraping the site (once a week) and updating the index. Without acceptance, this can be done manually by using their open source (no longer maintained) Docker container as described below.

## Pre-requisites 

* Docker

## Creating the search index

* Sign up for the Aloglia free plan
* Create a new index and make a note of the **index name**

![image](https://github.com/device42/device42-docs/assets/2641205/7bcc0aee-3e7a-47d7-acab-66c391bc7888)

* * Visit API Keys under settings:

![image](https://github.com/device42/device42-docs/assets/2641205/2a82587a-95b9-475a-a780-9ebcaea92c21)

* * Make note of the application id and the two api keys (one to update the index, one as a read-only token that will be included in the frontend to access the index and perform searches).
 
![image](https://github.com/device42/device42-docs/assets/2641205/4d2eac2b-9b23-4f6f-abfd-6b856c232695)

* Create a .env file with the application ID and the Admin API key, as described in [the docs](https://docsearch.algolia.com/docs/legacy/run-your-own).
* Create a `config.json` file with the contents copied from the [Indexer configuration](#config) below.
* If necessary, change the `start_urls` and `sitemap_urls` to the correct domain (dev, prod, etc)
* Run the Docker command

This should update the index in your aloglia account, which you can see in the portal.

If necessary, update the `src/pages/index.js` file to reflect the index name, appId, and **search key** (not the admin key) that you got from Algolia.

```
            <DocSearch
              indexName="device42"
              appId="SCH7N4RLU6"
              apiKey="acebf9e8f4b83b8c1e7270713d7f70b8"
            />
```

<h2 id="config"> Indexer configuration</h2>

```json
    "index_name": "device42",
    "start_urls": ["https://dev.docs.device42.com"],
    "sitemap_urls": ["https://dev.docs.device42.com/sitemap.xml"],
    "selectors": {
        "lvl0": {
            "selector": "(//ul[contains(@class,'menu__list')]//a[contains(@class, 'menu__link menu__link--sublist menu__link--active')]/text() | //nav[contains(@class, 'navbar')]//a[contains(@class, 'navbar__link--active')]/text())[last()]",
            "type": "xpath",
            "global": true,
            "default_value": "Documentation"
          },
        "lvl1": "header h1",
        "lvl2": "article h2",
        "lvl3": "article h3",
        "lvl4": "article h4",
        "lvl5": "article h5, article td:first-child",
        "lvl6": "article h6",
        "text": "article p, article li, article td:last-child"
      },
      "strip_chars": " .,;:#",
      "custom_settings": {
        "separatorsToIndex": "_",
        "attributesForFaceting": [
          "language",
          "version",
          "type",
          "docusaurus_tag"
        ],
        "attributesToRetrieve": [
          "hierarchy",
          "content",
          "anchor",
          "url",
          "url_without_anchor",
          "type"
        ]
      }
  }
```
