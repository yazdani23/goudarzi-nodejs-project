const PROCESSINGSTATUS="PROCESSING"
const WAITINGSTATUS="WAITING"
const FAILEDSTATUS="FAILED"
const ACCEPTSTATUS="ACCEPT"
const PENDINGSTATUS="PENDING"
const SENDINGSTATUS="SENDING"
const COMPLETESTATUS="COMPLETE"
const orderStatus= [PROCESSINGSTATUS,WAITINGSTATUS, FAILEDSTATUS,ACCEPTSTATUS, PENDINGSTATUS, SENDINGSTATUS,COMPLETESTATUS]

module.exports={
    WAITINGSTATUS,
    ACCEPTSTATUS,
    FAILEDSTATUS,
    SENDINGSTATUS,
    PROCESSINGSTATUS,
    PENDINGSTATUS,
    COMPLETESTATUS,
    orderStatus
}