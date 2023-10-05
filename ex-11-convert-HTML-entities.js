/*
  Convert the characters '&', '<', '>', ' " ' (double quote), and " ' " (apostrophe), 
  in a string to their corresponding HTML entities.
*/

function convertHtmlToEntities(str) {
  return str.replaceAll("&","&amp;")
            .replaceAll("<","&lt;")
            .replaceAll(">","&gt;")
            .replaceAll("'","&apos;")
            .replaceAll('"','&quot;');
};

console.log(convertHtmlToEntities("Dolce & 'Gabbana"));