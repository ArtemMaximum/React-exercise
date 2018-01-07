import {
  arrayOf,
  string,
  shape,
} from 'prop-types'


export const Profile = shape({
  name: string,
  description: arrayOf(string),
  avatar: string,
})

export const Experience = shape({
  position: string.isRequired,
  company: string.isRequired,
  link: string,
  dateFrom: string.isRequired,
  dateTo: string,
  city: string,
  comments: arrayOf(string),
  tags: arrayOf(string),
})
