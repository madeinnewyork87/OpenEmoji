const fs = require('fs');

/**
 * Emoji Library Compiler
 * Fetches the latest Unicode emojis and compiles them into a structured JSON file.
 * Run this with: node compiler.js
 */
async function generateEmojiLibrary() {
  try {
    console.log("🚀 Fetching latest emoji data from Unicode registry...");
    
    // We use a reliable public mirror of the Unicode emoji dataset
    const response = await fetch('https://unpkg.com/emoji.json@14.0.0/emoji.json');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const rawEmojis = await response.json();
    const categoriesMap = {};

    console.log(`📦 Processing ${rawEmojis.length} emojis...`);

    // Process ALL emojis
    rawEmojis.forEach(emoji => {
      // Get the raw category or group name
      let categoryName = emoji.group || emoji.category || 'Symbols';
      
      // FIX: Clean up sub-categories (e.g., turns "Smileys & Emotion (face-smiling)" into "Smileys & Emotion")
      if (categoryName.includes('(')) {
        categoryName = categoryName.split('(')[0].trim();
      }

      // Generate a clean ID for the category
      const categoryId = categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-');

      if (!categoriesMap[categoryId]) {
        categoriesMap[categoryId] = {
          id: categoryId,
          name: categoryName,
          emojis: []
        };
      }

      categoriesMap[categoryId].emojis.push({
        char: emoji.char,
        name: emoji.name
      });
    });

    // Convert map to array
    const finalData = Object.values(categoriesMap);

    // Write to a JSON file
    const outputPath = 'emoji_data.json';
    fs.writeFileSync(outputPath, JSON.stringify(finalData, null, 2));
    
    console.log(`✅ Success! Generated ${outputPath} with ALL emojis.`);
    console.log(`📊 Total Main Categories: ${finalData.length}`);
    console.log(`✨ You can now refresh your browser to see the grouped categories.`);

  } catch (error) {
    console.error("❌ Failed to compile emoji library:", error);
  }
}

generateEmojiLibrary();