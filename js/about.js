// Define the regex pattern to match the book name and the storygraph link
const regex = /<h3 class="font-bold text-xl"><span class="text-red-700 dark:text-red-200"><\/span><a href="(.+?)">(.+?)<\/a>/;

// Fetch the HTML content from the server
fetch('storygraph_cached_profile.html')
    .then(response => response.text())
    .then(html => {
        // Match the regex pattern against the HTML content
        const match = html.match(regex);
        if (match && match[2]) {
            // Extracted book name
            const bookName = match[2].trim();
            console.log('Book Name:', bookName);

            // Extracted storygraph link
            const storygraphLink = match[1].trim();
            console.log('Storygraph Link:', storygraphLink);

            // Update the existing <p> element with the book name and storygraph link
            const bookParagraph = document.querySelector('.book-text');
            if (bookParagraph) {
                bookParagraph.innerHTML = `The last book I read is <a href="https://app.thestorygraph.com${storygraphLink}" target="_blank">${bookName}</a>. Check out my <a href="https://app.thestorygraph.com/profile/stevensawtelle" target="_blank">Storygraph profile</a> for more books I've read, and add me as a friend!`;
            } else {
                console.log('Paragraph element with class "book-text" not found.');
            }
        } else {
            console.log('Book name or Storygraph link not found in the HTML content.');
        }
    })
    .catch(error => console.error('Error fetching HTML file:', error));
