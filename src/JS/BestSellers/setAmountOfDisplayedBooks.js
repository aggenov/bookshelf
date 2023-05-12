export function setAmountOfDisplayedBooks(bookshelfsRef) {
  const windowWidth = window.innerWidth;

  try {
    if (windowWidth >= 1440) {
      // display 5 books (desktop)
      bookshelfsRef.forEach(bookshelf => {
        bookshelf.classList.remove('bookshelf-tablet');
        bookshelf.classList.remove('bookshelf-mobile');
      });
      return;
    }

    if (windowWidth >= 768) {
      // display 3 books (tablet)
      bookshelfsRef.forEach(bookshelf => {
        bookshelf.classList.remove('bookshelf-mobile');
        bookshelf.classList.add('bookshelf-tablet');
      });
      return;
    }

    // display 1 book (mobile)
    bookshelfsRef.forEach(bookshelf => {
      bookshelf.classList.remove('bookshelf-tablet');
      bookshelf.classList.add('bookshelf-mobile');
    });
  } catch (error) {}
}
