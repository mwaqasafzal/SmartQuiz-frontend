export const convertDate = date=>{
    //date in UTC is passed
    const formattedDate = new Date(date);
    return `${formattedDate.getFullYear()}/${formattedDate.getMonth()}/${formattedDate.getDate()}`
}

