import { render } from '@testing-library/react';
import { ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

const block = {
  id: '4',
  type: ArticleBlockType.CODE,
  code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
};

describe('ArticleCodeBlockComponent', () => {
  test('Simple ArticleCodeBlockComponent Test', () => {
    render(<ArticleCodeBlockComponent block={block} />);
    // expect())
  });
});
