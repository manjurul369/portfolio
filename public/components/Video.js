import React from 'react'
import { FaArrowDown } from "react-icons/fa6";

export default function Video({ videoId, title, description }) {
    // Convert YouTube URL to embed format
    const getEmbedUrl = (videoId) => {
        // Handle both full YouTube URLs and video IDs
        if (videoId.includes('youtube.com/watch?v=')) {
            const url = new URL(videoId);
            return `https://www.youtube.com/embed/${url.searchParams.get('v')}`;
        } else if (videoId.includes('youtu.be/')) {
            const id = videoId.split('youtu.be/')[1].split('?')[0];
            return `https://www.youtube.com/embed/${id}`;
        } else {
            // Assume it's just the video ID
            return `https://www.youtube.com/embed/${videoId}`;
        }
    };

    const embedUrl = getEmbedUrl(videoId);

    return (
        <div className='w-full mt-6'>
            {/* Video Container */}
            <div className='rounded-lg p-5 overflow-hidden hover:bg-[#353334] transition-all duration-300'>
                {/* Video Player */}
                <div className='relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden'> {/* 16:9 Aspect Ratio */}
                    <iframe
                        className='absolute top-0 left-0 w-full h-full'
                        src={embedUrl}
                        title={title || "Project Video"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Video Info */}
                {(title || description) && (
                    <div className='p-4'>
                        {title && (
                            <h3 className='text-lg sm:text-xl font-semibold text-white mb-2'>
                                {title}
                            </h3>
                        )}
                        {description && (
                            <p className='text-para-black text-sm sm:text-base leading-relaxed'>
                                {description}
                            </p>
                        )}
                    </div>
                )}
            </div>

            {/* Watch on YouTube Link */}
            <div className='mt-3 text-center'>
                <div className='relative group inline-block'>
                    <a
                        href={videoId.includes('http') ? videoId : `https://www.youtube.com/watch?v=${videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='inline-flex items-center gap-2 text-white hover:underline transition-all duration-300 text-sm font-medium'
                    >
                        <svg
                            className='w-4 h-4'
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        Watch on YouTube
                    </a>
                    <FaArrowDown className='absolute text-xs -top-1 -right-4 transition-all duration-300 group-hover:-top-2 group-hover:-right-5 text-white tranform -rotate-135 mr-1' />
                </div>
            </div>
        </div>
    )
}
