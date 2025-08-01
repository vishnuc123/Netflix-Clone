import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

const MyList = () => {
    const watchlist = [] 

    return (
        <div className="flex min-h-screen bg-black text-white">
            <div className="w-64">
                <Sidebar />
            </div>

            <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-6">My Watchlist</h1>

                {watchlist.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64">
                        <p className="text-lg text-gray-400">Your watchlist is empty.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {watchlist.map((movie, index) => (
                            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                                <div className="aspect-[2/3] bg-gray-700 flex items-center justify-center">
                                    <span className="text-gray-500">Poster</span>
                                </div>
                                <div className="p-2">
                                    <p className="text-sm font-semibold truncate">Movie Title</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyList
