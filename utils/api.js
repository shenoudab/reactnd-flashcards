//------------------------------------------------------------------------------
// Author: Shenouda Bertel <shenoudab@mobiThought.com>
// Date: 25.05.2018
//------------------------------------------------------------------------------

import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'FlashCards:CardStore';

//------------------------------------------------------------------------------
// Fetch all the data from the store
//------------------------------------------------------------------------------
export function fetchData() {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(JSON.parse)
    .then(data => {
      if(data === null)
        return {};
      return data;
    });
}

//------------------------------------------------------------------------------
// Create deck
//------------------------------------------------------------------------------
export function deckCreate(deckName) {
  return fetchData()
    .then(data => ({
      ...data,
      [deckName]: {
        title: deckName,
        questions: {}
      }
    }))
    .then(JSON.stringify)
    .then(data => AsyncStorage.setItem(STORAGE_KEY, data));
}

//------------------------------------------------------------------------------
// Remove deck
//------------------------------------------------------------------------------
export function deckRemove(deckName) {
  return fetchData()
    .then(data => {
      delete data[deckName];
      return data;
    })
    .then(JSON.stringify)
    .then(data => AsyncStorage.setItem(STORAGE_KEY, data));
}

//------------------------------------------------------------------------------
// Update a card
//------------------------------------------------------------------------------
export function cardUpdate(deckId, card) {
  return fetchData()
    .then(data => {
      if(!(deckId in data))
        throw(Error(`Deck with ID ${deckId} does not exist`));
      data[deckId].questions[card.id] = card;
      return data;
    })
    .then(JSON.stringify)
    .then(data => AsyncStorage.setItem(STORAGE_KEY, data));
}

//------------------------------------------------------------------------------
// Remove a card
//------------------------------------------------------------------------------
export function cardRemove(deckId, cardId) {
  return fetchData()
    .then(data => {
      if(!(deckId in data))
        throw(Error(`Deck with ID ${deckId} does not exist`));
      if(!(cardId in data[deckId].questions))
        throw(Error(`Card with ID ${cardId} does not exist in deck ${deckId}`));
      delete data[deckId].questions[cardId];
      return data;
    })
    .then(JSON.stringify)
    .then(data => AsyncStorage.setItem(STORAGE_KEY, data));
}
