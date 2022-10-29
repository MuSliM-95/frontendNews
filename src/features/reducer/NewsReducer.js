const initialState = {
  news: [],
  text: "",
  error: null,
  loading: true,
  categories: [],
  newsLink: '',
  userId: null, 
  token: null
};

const READNEWS = "READNEWS";
const TEXT = "TEXT";
const READCATEGORIES = "READCATEGORIES";
const CATEGORIESREMOVE = "CATEGORIESREMOVE";
const CATEGORIESBYID = "CATEGORIESBYID";
const NEWS = "NEWS";
const USERID = "USERID"

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case READNEWS:
      return {
        ...state,
        news: [...state.news, ...(state.news = [])],
        news: [...state.news, ...action.payload],
        loading: false,
        error: action.payload,
      };
    case TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case READCATEGORIES:
      return {
        ...state,
        categories: [...state.categories, ...action.payload],
        loading: false,
        error: action.payload,
      };
    case CATEGORIESREMOVE:
      return {
        ...state,
        categories: [],
        loading: false,
        error: action.payload,
      };
    case CATEGORIESBYID:
      return {
        ...state,
        news: [...state.news, ...(state.news = [])],
        news: [...state.news, ...action.payload],
        loading: false,
        error: action.payload,
      };
    case NEWS:
      return {
        ...state,
        newsLink: action.payload,
        loading: false,
        error: action.payload,
      };
      case USERID: 
      return {
        ...state,

      }
    default:
      return state;
  }
};

export const readAsyncNews = (payload) => {
  return { type: READNEWS, payload };
};

export const FilterText = (payload) => {
  return { type: TEXT, payload };
};

export const readCategories = (payload) => {
  return { type: READCATEGORIES, payload };
};

export const readCategoriesRemove = (payload) => {
  return { type: CATEGORIESREMOVE, payload };
};

export const readCategoriesByid = (payload) => {
  return { type: CATEGORIESBYID, payload };
};

export const news = (payload) => {
  return { type: NEWS, payload };
};

export const login = (payload) => {
  return {type:USERID, payload }
}