
export default store=>next=>action=>{
    console.group(action.type);
        console.log(action);
        console.log('current state');
        console.log(store.getState());
    console.groupEnd();
    return next(action);
}