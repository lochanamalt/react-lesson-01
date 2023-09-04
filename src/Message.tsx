function Message(){
    let myName = 'Lochana'

    if (myName)
        return <h1>Hello {myName}..!</h1>
    return <h1>Hello React..!</h1>
}

export default Message;