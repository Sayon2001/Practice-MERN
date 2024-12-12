import React from 'react'

const Card = ({ blog }) => {
    return (
        <div>
            <div className="flex px-3 py-3">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={`http://localhost:3000/${blog.image}`} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{blog.title}</div>
                        <div className="font-bold text-lg mb-2">{blog.subtitle}</div>
                        <p className="text-gray-700 text-base">
                            {blog.description}
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card