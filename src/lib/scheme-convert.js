import { compose } from 'ramda'
// import moment from 'moment'


function experienceClear({ experience, ...scheme }) {
  return { ...scheme, experience }
}


export default compose(experienceClear)
