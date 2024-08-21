export const personKey = 'currentPerson';

export function getPersonId() {
    var person = JSON.parse(localStorage.getItem(personKey)!);
    return person.id;
  }