const INITIAL_STATE = {mood: '😑'};

const moods = [{mood: '😄', color: 'pink', text: 'happy'}, {mood: '😥', color: 'orange', text: 'sad'}, {mood: '🤔', color: 'purple', text: 'confused'}, {mood: '🤬', color: 'red', text: 'angry'}];

const getRandomMood = () => {
    return moods[Math.floor(Math.random()* moods.length)]
}

const moodReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case 'HAPPY':
            return moods[0]
        case 'SAD':
            return moods[1]
        case 'CONFUSED':
            return moods[2]
        case 'ANGRY':
            return moods[3]
        case 'RANDOM':
            return getRandomMood();
        default:
            return state;
    }
}

const store = Redux.createStore(moodReducer);