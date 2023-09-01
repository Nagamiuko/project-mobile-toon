import axios from "axios";
import { server } from "../../serverAPI";

export const getBookList = () => async (dispatch) => {
   try {
     dispatch({
       type: "getBookRequest",
     });
 
     const { data } = await axios.post(`${server}/api/books/all-book`);
     dispatch({
       type: "getBookSuccess",
       payload: data,
     });
   } catch (error) {
     dispatch({
       type: "getBookFailed",
       payload: error.response.data.message,
     });
   }
 };

 export const getBookDetails = (bookid) => async (dispatch) => {
  try {
    dispatch({
      type: "getBookDetailRequest",
    });

    const { data } = await axios.post(`${server}/api/books/book-detail/${bookid}`);
    dispatch({
      type: "getBookDetailSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getBookDetailFailed",
      payload: error.response.data.message,
    });
  }
};