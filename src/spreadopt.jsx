const Spread= () =>
{
    const fullname = [ 'ali','sufian']
    const details = [1, ...fullname, 23, 'pak']

    const boys = ['ali', 'amjid', 'bilal', 'adeel']
    const grils = ['aishya', ' mahwish', 'suman', 'sajida']

    const students=[...boys,...grils]
    console.log(fullname)
    console.log(details)
    console.log(students)
    return(
        <>
            <h1>Hello Spread Opration</h1>
        </>
    )
}
export default Spread;
