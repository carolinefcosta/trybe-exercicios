export const WAITING_API = 'WAITING_API';
export const RESPONSE_API = 'RESPONSE_API';
export const ERROR_API = 'ERROR_API';

const waitingApi = () => ({
  type: WAITING_API,
});

const responseApi = (imgCharacter) => ({
  type: RESPONSE_API,
  payload: imgCharacter,
});

const errorApi = (error) => ({
  type: ERROR_API,
  payload: error,
});

const fetApiGameOfThrones = (id) => {
  return async (dispatch) => {
    try {
      dispatch(waitingApi());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${id}`)
      const data = await response.json();
      console.log(data)
      dispatch(responseApi(data))
    } catch (error) {
      dispatch(errorApi(error))
    }
  }
};

export default fetApiGameOfThrones;
