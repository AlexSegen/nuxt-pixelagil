import moment from 'moment'
import numeral  from 'numeral'

export default {
    formatDate(val = new Date()) {
        return moment(val).format('MMM Do YY')
    },
    formatDateTime(val = new Date()) {
        return moment(val).format('MMMM Do YYYY, h:mm:ss a')
    },
    formatCurrency(val) {
        return numeral(val).format('$0,0.00');
    }
}