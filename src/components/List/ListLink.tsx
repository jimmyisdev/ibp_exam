function ListLink({ listData = [], linkURL = 'https://ibp-exam.vercel.app/' }: { listData: string[], linkURL?: string }) {
    return (
        <ul className='text-base w-56 '>
            {listData.length && listData.map((item: string) => {
                return <li key={item} className="mb-2 w-full hover:font-bold "><a href={linkURL}>{item}</a></li>
            })}
        </ul>
    )
}
export default ListLink