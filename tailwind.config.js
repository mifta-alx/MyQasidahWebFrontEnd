/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'primary' : '#09755E',
      'primary-700' : '#086551',
      'gray-50' : '#F9FAFB',
      'gray-100' : '#F3F4F6',
      'gray-200' : '#E5E7EB',
      'gray-300' : '#D1D5DB',
      'gray-400' : '#9CA3AF',
      'gray-500' : '#6B7280',
      'gray-600' : '#4B5563',
      'gray-700' : '#374151',
      'gray-800' : '#1F2937',
      'gray-900' : '#111827',
      'gray' : '#E5E5E5',
      'other-gray' : '#F4F5F7',
      'white' : '#FFFFFF',
      'red-50' : '#FDF2F2',
      'red-100' : '#FDE8E8',
      'red-200' : '#FBD5D5',
      'red-300' : '#F8B4B4',
      'red-400' : '#F98080',
      'red-500' : '#F05252',
      'red-600' : '#E02424',
      'red-700' : '#C81E1E',
      'red-800' : '#9B1C1C',
      'red-900' : '#771D1D',
      'green-50' : '#F3FAF7',
      'green-100' : '#DEF7EC',
      'green-200' : '#BCF0DA',
      'green-300' : '#84E1BC',
      'green-400' : '#31C48D',
      'green-500' : '#0E9F6E',
      'green-600' : '#057A55',
      'green-700' : '#046C4E',
      'green-800' : '#03543F',
      'green-900' : '#014737',
    },
    extend: {
      fontFamily:{
        'pjs-bold' : ['PlusJakartaSans-Bold', 'sans-serif'],
        'pjs-regular' : ['PlusJakartaSans-Regular', 'sans-serif'],
        'pjs-medium' : ['PlusJakartaSans-Medium', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
