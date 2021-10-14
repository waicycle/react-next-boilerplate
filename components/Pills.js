import React from 'react'
 
const Pills = ({categories}) => (
  <div className="mt-4 -ml-4 w-screen sm:w-full sm:ml-0">
    <div className="overflow-auto sm:overflow-hidden">
      <div className="mx-auto space-x-2 justify-center items-center overflow-x-scroll inline-table sm:flex sm:flex-wrap">
        <div key="newuuid" className="text-center mb-3 table-cell">
          <div className="rounded-full shadow-sm overflow-hidden ml-4 mr-1 px-3 bg-brand-600 border-brand-600 border">
            <span className="text-xs  text-brand-50 uppercase tracking-wide">new</span>
          </div>
        </div>
        {categories.map((cate) => (
          <CategoryPill category={cate} key={cate.uuid} />
        ))}
      </div>
    </div>
  </div>
)