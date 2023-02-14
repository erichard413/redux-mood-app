const btns = document.querySelectorAll('button');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');

btns.forEach(b => b.addEventListener('click', (e)=>{
    store.dispatch({type: e.target.innerText})
    let {mood, color} = store.getState();
    h1.innerText = `Mood: ${mood}`;
    document.body.style.backgroundColor=color;
}))

store.subscribe(()=>{
    p.innerText = `You are feeling ${store.getState().text} today.`
})