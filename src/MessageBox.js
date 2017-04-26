/**
 * Created by rroussel on 24/04/2017.
 */

/*EITHER*/
/*import ParentMessageBox from 'core-hybrid/lib/MessageBox'*/
/*OR*/
const h = require('core-hybrid')

export default class MessageBox extends h.MessageBox{

    constructor(message){
        super(message)
    }

    show(){
        alert(this._message)
    }
}