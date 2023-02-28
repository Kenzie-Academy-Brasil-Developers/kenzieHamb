import { useContext } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { IProductsProps } from '../../../providers/@types'; 
import { CartContext } from '../../../providers/CartContext';





const ProductCard = ({product} : IProductsProps) => {

  const {addCartShopping} = useContext(CartContext)


  return (
  <StyledProductCard>
    <div className='imageBox'>
      <img src={`${product.img}`} alt='Hamburguer' />
    </div>
    <div className='content'>
      <StyledTitle tag='h3' $fontSize='three'>
      {`${product.name}`}
      </StyledTitle>
      <StyledParagraph className='category'>{`${product.category}`}</StyledParagraph>
      <StyledParagraph className='price'>{`${product.price}`}</StyledParagraph>
      <StyledButton $buttonSize='medium' $buttonStyle='green' onClick={() => addCartShopping(product)}>
        Adicionar
      </StyledButton>
    </div>
  </StyledProductCard>

  )
  
  
}


export default ProductCard;
