// Utility function to save state to localStorage
const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };
  
  // Utility function to load cart from localStorage
  const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  };
  
  const initialState = {
    cartItems: loadCartFromLocalStorage(),  // Load cart items from localStorage on initialization
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const exists = state.cartItems.find(item => item.id === action.payload.id);
        if (exists) {
          return { ...state }; // If item exists, don't add it again
        } else {
          const updatedCart = [...state.cartItems, action.payload];
          saveCartToLocalStorage(updatedCart); // Save updated cart to localStorage
          return { ...state, cartItems: updatedCart };
        }
  
      case 'REMOVE_FROM_CART':
        const filteredCart = state.cartItems.filter(item => item.id !== action.payload);
        saveCartToLocalStorage(filteredCart); // Save updated cart to localStorage
        return { ...state, cartItems: filteredCart };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  