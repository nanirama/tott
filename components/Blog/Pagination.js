import Link from 'next/link'
import { useRouter } from 'next/router'

const Pagination = ({ currentPage, numberOfPages, paginationPath = 'blog' }) => {
    const router = useRouter()

    if (numberOfPages > 1) {
        let pages = [];
        for (let i = 0; i < numberOfPages; i++) {
            pages.push({
                label: i + 1,
                linkURL: i === 0 ? paginationPath : `${paginationPath}?page=${i + 1}`,
            });
        }
        return (
            <div className="w-full flex items-center justify-between border-t pt-5 border-gray-200 dark:border-gray-700">
                <div className="flex items-center py-3 sm:px-4 px-2 shadow text-gray-600 hover:text-gray-700 cursor-pointer rounded-lg border">
                    <button className="text-sm gap-2 items-center font-medium flex"
                        onClick={() => router.push(currentPage === 2 ? `/${paginationPath}` : `/${paginationPath}?page=${currentPage - 1}`)}
                        disabled={currentPage <= 1}
                    ><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8333 7.00033H1.16663M1.16663 7.00033L6.99996 12.8337M1.16663 7.00033L6.99996 1.16699" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoinn="round" />
                        </svg>&nbsp;Previous</button>
                </div>
                <div className="flex sm:ml-0 ml-3">
                    {pages.map((page, index) => (
                        <Link key={index}
                            href={page.linkURL}
                        >
                            {currentPage === page.label ? (
                                <span className="text-sm font-medium cursor-pointer text-gray-700 py-2 px-3 mr-4 bg-slate-100 rounded-lg">{page.label}</span>
                            ) : (
                                <a className="text-sm font-medium cursor-pointer text-gray-400 hover:rounded-lg hover:bg-slate-100  hover:text-gray-700 py-2 px-3 mr-4">{page.label}</a>
                            )}
                        </Link>
                    ))}
                </div>
                <div className="flex items-center py-3 sm:px-4 px-2 shadow text-gray-600 hover:text-gray-700 cursor-pointer rounded-lg border">
                    <button className="text-sm items-center gap-2 font-medium leading-none flex"
                        onClick={() => router.push(`/${paginationPath}?page=${currentPage + 1}`)}
                        disabled={currentPage >= numberOfPages}
                    >Next
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoinn="round" />
                        </svg></button>
                </div>
            </div>
        );
    }
    return null;
};

export default Pagination;