
/**
 *  The desired article is found in the list of articles
 * @param {Array} articles all articles
 * @param {number} searchedId - The slug of the searched article
 * @return {Object} - The article found 
 */
  export function findArticle(articles, searchedId) {
    const article = articles.find((testedArticle) => {
      return testedArticle.id === searchedId;
    });
    return article;
  }
