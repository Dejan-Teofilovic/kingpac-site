import React, { createContext, useContext, useReducer } from 'react';
import api from '../utils/api';
import { ERROR, MESSAGE_SERVER_ERROR, SUCCESS } from '../utils/constants';
import { AlertMessageContext } from './AlertMessageContext';

// ----------------------------------------------------------------------

const initialState = {
  currentUserdata: null,
  winnersOfThisWeek: [],
  winnersOfLastWeek: []
};

const handlers = {
  SET_CURRENT_USERDATA: (state, action) => {
    return {
      ...state,
      currentUserdata: action.payload
    };
  },
  SET_WINNERS_OF_THIS_WEEK: (state, action) => {
    return {
      ...state,
      winnersOfThisWeek: action.payload
    };
  },
  SET_WINNERS_OF_LAST_WEEK: (state, action) => {
    return {
      ...state,
      winnersOfLastWeek: action.payload
    };
  }
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const UserContext = createContext({
  ...initialState,
  getUserdata: () => Promise.resolve(),
  getWinners: () => Promise.resolve()
});

//  Provider
function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { openAlert } = useContext(AlertMessageContext);

  /**
   * Fetch userdata from server.
   * @param {*} walletAddress The address of connected wallet
   */
  const getUserdata = (walletAddress) => {
    console.log('# walletAddress => ', walletAddress);
    api.get(`/site/getUserdata/${walletAddress}`)
      .then(res => {
        dispatch({
          type: 'SET_CURRENT_USERDATA',
          payload: res.data
        });
      })
      .catch(error => {
        console.log(error.status);
        openAlert({
          severity: ERROR,
          message: MESSAGE_SERVER_ERROR
        });
      });
  };

  const getWinners = () => {
    api.get('/site/getWinners')
      .then(res => {
        console.log('# res => ', res);
        dispatch({
          type: 'SET_WINNERS_OF_THIS_WEEK',
          payload: res.data.winnersOfThisWeek
        });
        dispatch({
          type: 'SET_WINNERS_OF_LAST_WEEK',
          payload: res.data.winnersOfLastWeek
        });
      })
      .catch(error => {
        console.log(error.status);
        openAlert({
          severity: ERROR,
          message: MESSAGE_SERVER_ERROR
        });
      });
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        getUserdata,
        getWinners
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };