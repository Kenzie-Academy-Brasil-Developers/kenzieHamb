export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IRegisterFormValues {
  email: string;
  password: string;
  name: string;
  confirmPassword?: string;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}


export interface IUserContext{
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userLogout: () => void;
      
}



export interface IProducts {
  id: string;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface IProductsProps{
  product: IProducts
}




export interface ICartContext{
  cart: IProducts[];
  setCart: React.Dispatch<React.SetStateAction<IProducts[]>>;
  cartShoppingList: null;
  setCartShoppingList: React.Dispatch<React.SetStateAction<null>>;
  addCartShopping: (product: IProducts) => void;
  searchMenuList: IProducts[];
  setShoppingCartList: React.Dispatch<any>;
  shoppingCartList: any;
  valueCart: any;
  removeAllItens: () => void;
  removeCartShopping: (productId: any) => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>
}