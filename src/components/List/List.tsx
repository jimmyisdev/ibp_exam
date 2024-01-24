function List({ listData = [] }: { listData: string[] }) {
    return (
        <ul className='h-36 min-h-36 m-2 overflow-scroll '>
            {listData.length && listData.map((item: string) => <li key={item}>{item}</li>)}
        </ul>
    )
}
export default List