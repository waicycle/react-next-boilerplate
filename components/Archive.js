import React, { Fragment } from 'react'
import { HomeIcon } from '@heroicons/react/solid'

const Archive = ({blok}) => {
  return (
    <Fragment>
      <nav className="flex mb-2" aria-label="Breadcrumb">
        <ol role="list" className="max-w-screen-xl w-full mx-auto flex space-x-4 sm:px-1">
          <li className="flex">
            <div className="flex items-center">
              <a href="/archives" className="text-gray-400 hover:text-gray-500">
                <HomeIcon className="flex-shrink-0 w-5 h-5" aria-hidden="true" />
                <span className="sr-only">Archives</span>
              </a>
            </div>
          </li>
          <li className="flex">
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 h-4 w-2 text-gray-400"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <span className="ml-4 text-xs text-gray-400 truncate">
              {blok.publish_date.slice(0,10)} {blok.book_title}
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 uppercase">{blok.book_title}</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{blok.issue ? `#${blok.issue} - ${blok.issue_title}` : ""}</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-3">
            <div className="sm:col-span-1">
              <dt className="text-xs font-medium text-gray-400 uppercase">article_title</dt>
              <dd className="mt-1 text-sm text-gray-900">{blok.article_title}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-xs font-medium text-gray-400 uppercase">pages</dt>
              <dd className="mt-1 text-sm text-gray-900">{blok.pages}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-xs font-medium text-gray-400 uppercase">ISBN</dt>
              <dd className="mt-1 text-sm text-gray-900">{blok.isbn}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-xs font-medium text-gray-400 uppercase">Publish Date</dt>
              <dd className="mt-1 text-sm text-gray-900">{blok.publish_date.slice(0,10)}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-xs font-medium text-gray-400 uppercase">publisher</dt>
              <dd className="mt-1 text-sm text-gray-900">{blok.publisher}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-xs font-medium text-gray-400 uppercase">editor</dt>
              <dd className="mt-1 text-sm text-gray-900">{blok.editor}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-xs font-medium text-gray-400 uppercase">contributor</dt>
              <dd className="mt-1 text-sm text-gray-900">{blok.contributor}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-xs font-medium text-gray-400 uppercase">interviewer</dt>
              <dd className="mt-1 text-sm text-gray-900">{blok.interviewer}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-xs font-medium text-gray-400 uppercase">featured_work</dt>
              <dd className="mt-1 text-sm text-gray-900">{blok.featured_work}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-xs font-medium text-gray-400 uppercase">note</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {blok.note}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-xs font-medium text-gray-400 uppercase">medium</dt>
              <dd className="mt-1 text-sm text-gray-900">{blok.medium}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-xs font-medium text-gray-400 uppercase">category</dt>
              <dd className="mt-1 text-sm text-gray-900">{blok.category}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-xs font-medium text-gray-400 uppercase">{blok.images && "Assets"}</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                  {blok.images && blok.images.map((image) => (
                    <li key={image.filename} className="relative">
                      <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-brand-500 overflow-hidden">
                        <img src={image.filename} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                        <button type="button" className="absolute inset-0 focus:outline-none">
                          <span className="sr-only">View details for {image.name}</span>
                        </button>
                      </div>
                      <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{image.name}</p>
                      {/* <p className="block text-sm font-medium text-gray-400 pointer-events-none">{image.name}</p> */}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Fragment>
  )
}
 
export default Archive