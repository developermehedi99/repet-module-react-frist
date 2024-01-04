import SingleBook from "./SingleBook";

const Bookmark = ({ bookmarks, timespan }) => {
    // const {reading_time} = timespan;
    return (
        <div className="w-1/3">
            <h1>reading time = {timespan} minites</h1>
            <div>
                <h1 className="text-2xl font-bold">bookmarks blogs: {bookmarks.length}</h1>
                {
                    bookmarks.map(bookmark => <SingleBook
                        key={bookmark.id}
                        bookmark={bookmark}
                    ></SingleBook>)
                }
            </div>
        </div>
    );
};

export default Bookmark;