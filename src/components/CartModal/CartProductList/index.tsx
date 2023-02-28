import { useContext } from 'react';
import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../providers/CartContext';
import { IProducts } from '../../../providers/@types';

const CartProductList = () => {
  const { shoppingCartList, valueCart, removeAllItens } =
    useContext(CartContext);

  return (
    <StyledCartProductList>
      <ul>
        {shoppingCartList.map(
          (product: IProducts) =>
            product.name && (
              <CartProductCard key={product.id} product={product} />
            )
        )}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>
          R$ {valueCart.toFixed(2)}
        </StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        onClick={() => removeAllItens()}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
