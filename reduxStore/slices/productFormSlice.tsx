import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductFormState {
  images: string[];
  originalPrice: string;
  price: string;
  productName: string;
  description: string;
  writtenValues: Record<string, string>;
  selectedValues: Record<string, string>;
}

const initialState: ProductFormState = {
  images: [],
  originalPrice: '',
  price: '',
  productName: '',
  description: '',
  writtenValues: {},
  selectedValues: {},
};

const productFormSlice = createSlice({
  name: 'productForm',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<Partial<ProductFormState>>) => {
      Object.assign(state, action.payload);
    },
    clearFormData: () => initialState,
  },
});

export const { setFormData, clearFormData } = productFormSlice.actions;
export default productFormSlice.reducer;
