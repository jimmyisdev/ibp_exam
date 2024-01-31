function ListLink({ listData = [] }: { listData: string[] }) {
    return (
        <ul className='text-base'>
            {listData.length && listData.map((item: string) => {
                return <li key={item} className="mb-2"><a>{item}</a></li>
            })}
        </ul>
    )
}
export default ListLink