import config from '@/config'
import $http from "@/services/api.config";
import utils from '@/helpers/utils'
let RESOURCE_NAME = "/mailer/send";

export default {
  async post(data) {
    try {
      let total = await utils.formatCurrency(data.cartTotal)
      let itemList = ''

      for (let i of data.cartItems) {
        itemList += `<li>(${i.quantity}) ${i.name} $${i.price}</li>`
      }

      let payload = {
        subject: config.app + ': Quotation request',
        recipient: config.contact.email,
        content: `
        <p style="margin-top:20px;;font:15px/1.25em 'Helvetica Neue',Arial,Helvetica;color:#737373;text-align:center">
            You got a new quotation request made by ${data.buyer.name} on ${utils.formatDate()}</p>
        <p style="margin-top:2px;;font:15px/1.25em 'Helvetica Neue',Arial,Helvetica;color:#737373;text-align:center">Email: ${data.buyer.email}. Phone: ${data.buyer.phone ? data.buyer.phone: 'Not specified'}</p>
        <div style="background:#f6f7f8;border-radius:3px"> <br>
                  <ul style="text-align:center;margin-top:2px;;font:15px/1.25em 'Helvetica Neue',Arial,Helvetica;color:#737373;text-align:center: list-style: none; padding: 0">
                    ${itemList}
                  </ul>
                  <p style="text-align:center"> <a href="${config.panel}" style="color:#306f9c;font:14px/1.25em 'Helvetica Neue',Arial,Helvetica;text-decoration:none;font-weight:bold"
                  target="_blank">Total: ${total}</a> </p>
            <p style="font:15px/1.25em 'Helvetica Neue',Arial,Helvetica;margin-bottom:0;text-align:center">
                <a href="${config.panel}" style="border-radius:3px;background:#3aa54c;color:#fff;display:block;font-weight:700;font-size:16px;line-height:1.25em;margin:24px auto 6px;padding:10px 18px;text-decoration:none;width:180px"
                    target="_blank"> See details</a> </p><br><br>
        </div>`}
      return $http.post(RESOURCE_NAME, payload);
    } catch (error) {
      console.log(`Error: ${error.message}`)
    }
  }
};