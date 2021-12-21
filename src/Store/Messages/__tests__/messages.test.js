import messagesReducer, {initialState} from "../reducer";
import {addMessage, removeMessagesByChatID} from "../actions";


describe('messagesReducer', () => {

  it('вызов редьюсера без экшена вернет initialState', () => {
    
    const result = messagesReducer();

    expect(result).toEqual(initialState);
  });

  it('меседж добавить', () => {

    const result = messagesReducer(undefined,addMessage('chat1',{"author": "me", "id": "message1", "text": "Привет",}));

    expect(result).toEqual({
        chat1: [
        { id: 'message1', text: 'Привет', author: 'me' },
     ],
    });
});

    it('Удалить месседжы', () => {
       const initialState = {
        chat1: [
          { id: 'message1', text: 'Привет', author: 'me' },
       ],
        }

        const result = messagesReducer(initialState,removeMessagesByChatID('chat1'));

        expect(result).toEqual({
          //Object {}
        });
    });
    
});
