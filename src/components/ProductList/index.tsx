import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { CartContext } from '../../providers/CartContext';
import { IProducts } from '../../providers/@types';



const ProductList = () => {
  
  const {searchMenuList} = useContext(CartContext)
  return ( 

<StyledProductList>    
  {searchMenuList.map(((product: IProducts) => product.name && (<ProductCard key={product.id} product={product} />)
    
  ))}    
</StyledProductList>

  )

}


export default ProductList;
