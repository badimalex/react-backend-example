import moment from 'moment';

export default function(date) {
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
}
