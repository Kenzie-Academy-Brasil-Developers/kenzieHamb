import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ICartContext, IDefaultProviderProps, IProducts } from './@types';
import { api } from '../services/api';

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate();
  const localMenuCartList = localStorage.getItem('@MENU');
  const [cart, setCart] = useState<IProducts[]>([]);
  const [cartShoppingList, setCartShoppingList] = useState(false);
  const [shoppingCartList, setShoppingCartList] = useState(
    localMenuCartList ? JSON.parse(localMenuCartList) : []
  );
  const [search, setSearch] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN');
    if (token) {
      const shopForm = async () => {
        try {
          const response = await api.get<IProducts[]>('/products', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setCart(response.data);

          navigate('/shop');
        } catch (error) {
          console.log(error);
        }
      };
      shopForm();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@MENU', JSON.stringify(shoppingCartList));
  }, [shoppingCartList]);

  const searchMenuList = cart.filter((product) =>
    search === ''
      ? true
      : product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
  );

  const addCartShopping = (product: IProducts) => {
    const localMenuCartList = localStorage.getItem('@MENU');

    if (localMenuCartList) {
      if (!localMenuCartList.includes(product.name)) {
        toast.success(`O produto ${product.name} foi adicionado ao carrinho`);
        if (shoppingCartList) {
          setShoppingCartList([...shoppingCartList, { ...product }]);
        }
      } else {
        toast.error(`O produto ${product.name} já foi adicionado ao carrinho`);
      }
    }
  };

  const removeAllItens = () => {
    setShoppingCartList([]);
    toast.info('Todos os itens foram removidos');
  };

  const removeCartShopping = (productId: any) => {
    const newCartShopping = shoppingCartList.filter(
      (product: { id: any }) => product.id !== productId
    );
    setShoppingCartList(newCartShopping);
    toast.error('O produto foi removido do carrinho');
  };

  const valueCart = shoppingCartList.reduce(
    (accumulate: number, valueCurrent: { price: number }) =>
      accumulate + valueCurrent.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartShoppingList,
        setCartShoppingList,
        addCartShopping,
        searchMenuList,
        setShoppingCartList,
        shoppingCartList,
        valueCart,
        removeAllItens,
        removeCartShopping,
        setSearch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
