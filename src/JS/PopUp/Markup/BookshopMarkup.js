// сохраняю ссылки на иконки магазинов в одном объекте
const images = {
  amazon: {
    '1x': require('../../../images/amazon.png'),
    '2x': require('../../../images/amazon@2x.png'),
    width: 62,
  },
  apple: {
    '1x': require('../../../images/books.png'),
    '2x': require('../../../images/books@2x.png'),
    width: 32,
  },
  bookshop: {
    '1x': require('../../../images/book-shop.png'),
    '2x': require('../../../images/book-shop@2x.png'),
    width: 38,
  },
};

// делаю деструктуризацию иконок, теперь можно использовать такой синтаксис:
// apple['2x'], amazon['1x'] и тд.
const { amazon, apple, bookshop } = images;

/*

  тут логика createShopIcon простая, если название из buy_links.name совпадает
  с одним из популярных магазинов, тогда мы вызываем функцию, 
  которая вернет разметку этого магазина, с правильными аргументами

*/

export function createShopIcon({ name, url }) {
  if (name === 'Amazon') {
    // console.log(name);
    return ShopIcon(name, url, amazon['1x'], amazon['2x'], amazon.width);
  }
  if (name === 'Apple Books') {
    // console.log(name);
    return ShopIcon(name, url, apple['1x'], apple['2x'], apple.width);
  }
  if (name === 'Bookshop') {
    // console.log(name);
    return ShopIcon(name, url, bookshop['1x'], bookshop['2x'], bookshop.width);
  }
}

function ShopIcon(name, url, srcset1x, srcset2x, width) {
  return `
    <li>
      <a href="${url}" target="_blank">
        <img
          src="${srcset1x}"
          class="logo"
          srcset="${srcset1x} 1x, ${srcset2x} 2x"
          alt="${name}"
          width="${width}"
        />
      </a>
    </li>
  `;
}
