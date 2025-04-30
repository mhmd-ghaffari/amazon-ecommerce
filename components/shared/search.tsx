import React from 'react'

import { APP_NAME } from '@/lib/contstans'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

import { Input } from '../ui/input'
import { SearchIcon } from 'lucide-react'
const categories = ['men', 'women', 'kids', 'accessories']
export default function Search() {
  return (
    <form action='/search' method='Get' className='flex items-stretch h-10'>
      <Select name='category'>
        <SelectTrigger className='h-10 min-h-[2.5rem] border border-gray-300 bg-gray-100 text-black rounded-l-md rounded-r-none px-3 flex items-center'>
          <SelectValue placeholder='All' />
        </SelectTrigger>
        <SelectContent position='popper'>
          <SelectItem value='all'>All</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input
        className='flex-1 rounded-none dak:border-gray-200 bg-gray-100 text-black text-base h-full'
        placeholder={`Search Site ${APP_NAME}`}
        name='q'
        type='search'
      />
      <button
        type='submit'
        className='bg-primary text-primary-foreground text-black rounded-s-none rounded-e-md h-full px-3 py-2'
      >
        <SearchIcon className='w-6 h-6' />
      </button>
    </form>
  )
}
