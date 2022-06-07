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
            <div class="w-full  flex items-center justify-between border-t pt-5 border-gray-200 dark:border-gray-700">
                <div class="flex items-center py-3 px-4 shadow text-gray-600  hover:text-gray-700 cursor-pointer rounded-lg border">
                    <button class="text-sm gap-2 items-center font-medium sm:flex hidden"
                        onClick={() => router.push(currentPage === 2 ? `/${paginationPath}` : `/${paginationPath}?page=${currentPage - 1}`)}
                        disabled={currentPage <= 1}
                    ><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8333 7.00033H1.16663M1.16663 7.00033L6.99996 12.8337M1.16663 7.00033L6.99996 1.16699" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>&nbsp;Previous</button>
                </div>
                <div class="sm:flex hidden">
                    {pages.map((page) => (
                        <Link
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
                <div class="flex items-center py-3 px-4 shadow text-gray-600 hover:text-gray-700 cursor-pointer rounded-lg border">
                    <button class="text-sm items-center gap-2 font-medium leading-none sm:flex hidden"
                        onClick={() => router.push(`/${paginationPath}?page=${currentPage + 1}`)}
                        disabled={currentPage >= numberOfPages}
                    >Next
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></button>
                </div>
            </div>
        );
    }
    return null;
};

export default Pagination;