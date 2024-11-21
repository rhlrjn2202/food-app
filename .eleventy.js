const { v4: uuidv4 } = require('uuid');
    const { format, parseISO } = require('date-fns');

    module.exports = function(eleventyConfig) {
      eleventyConfig.addPassthroughCopy("src");

      eleventyConfig.addCollection("menu", function(collection) {
        return collection.getFilteredByGlob("src/menu/*.md");
      });

      eleventyConfig.addCollection("orders", function(collection) {
        return collection.getFilteredByGlob("src/orders/*.md");
      });

      eleventyConfig.addCollection("users", function(collection) {
        return collection.getFilteredByGlob("src/users/*.md");
      });

      eleventyConfig.addShortcode("uuid", function() {
        return uuidv4();
      });

      eleventyConfig.addFilter("formatDate", function(date) {
        return format(parseISO(date), 'MMM d, yyyy');
      });

      return {
        dir: {
          input: "src",
          output: "dist"
        }
      };
    };
