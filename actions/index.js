//------------------------------------------------------------------------------
// Author: Shenouda Bertel <shenoudab@mobiThought.com>
// Date: 25.05.2018
//------------------------------------------------------------------------------

export const DECK_SET_DB = 'DECK_SET_DB';
export const DECK_CREATE = 'DECK_CREATE';
export const DECK_REMOVE = 'DECK_REMOVE';
export const CARD_UPDATE = 'CARD_UPDATE';
export const CARD_REMOVE = 'CARD_REMOVE';

export function deckSetDb(db) {
  return {
    type: DECK_SET_DB,
    db
  };
}

export function deckCreate(name) {
  return {
    type: DECK_CREATE,
    name
  };
}

export function deckRemove(name) {
  return {
    type: DECK_REMOVE,
    name
  };
}

export function cardUpdate(deckId, card) {
  return {
    type: CARD_UPDATE,
    deckId,
    card
  };
}

export function cardRemove(deckId, cardId) {
  return {
    type: CARD_REMOVE,
    deckId,
    cardId
  };
}
