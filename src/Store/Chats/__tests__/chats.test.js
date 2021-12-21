import chatsReducer, {initialState} from "../reducer";
import {addChat, removeChat} from "../actions";


describe('chatsReducer', () => {

  it('вызов редьюсера без экшена вернет initialState', () => {
    
    const result = chatsReducer();

    expect(result).toEqual(initialState);
  });

  it('Чат добавить', () => {

    const result = chatsReducer(undefined,addChat(1234,'fox'));

    expect(result).toEqual({
        1234 :{
          id:1234,
          name: 'fox'
        },
    });
});
    it('Удалить чат', () => {
       const initialState = {
             chat1: {
              id: 'chat1',
                name: 'Чат 1',
             },
        }
        const result = chatsReducer(initialState,removeChat('chat1'));

        expect(result).toEqual({
          //Object {}
        });
    });
});
