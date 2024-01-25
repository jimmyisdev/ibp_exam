function List({ listData = [] }: { listData: string[] }) {
    return (
        <ul className='h-36 min-h-36  overflow-scroll text-base'>
            {listData.length && listData.map((item: string) => <li key={item}>{item}</li>)}
        </ul>
    )
}
export default List