export default {
    localOrVm: 'local', //local || vm    [check all services, and guards/main.guard.ts, and comps]
    route:{
      //agent assignment
      AgentAssignGI: 'easAgentAssignGI',
      AgentAssignCS: 'easAgentAssignCS',
      AgentDetail: 'easAgentDetail',
      CampaignDetail: 'easCampaignDetail',
      ClientDetail: 'easClientDetail',
      ViewEmail: 'easViewEmail',
      //lead response
      AgentInterface:'easAgentInterface',
      APInterface:'easAPInterface',
      AOInterface:'easAOInterface',
      //PDD
      LeadExtensionAppl:"easLeadExtensionAppl",
      LeadExtensionApproval:"easLeadExtensionApproval",
      LeadSummary:"easLeadSummary",
      //edm
      EDM:"easEDM"

    },
    CSSearchRecordColumnField: [
      'fullName','emailAddr','mobileNo','submissionDate',
      'prodClass','polNo','birthDate',
      'idCardNo', 'gender', 'giOptOut',
      'lifeOptOut','campaignCode',
      'agentInfo',
      'firstContactDate','contactCustomer',
      'assignmentStatus', 'agentAccountExpiryDate',
      'pruchatEmailSendDate',
      'SMSEmailSendDate'],
    GISearchRecordColumnField: [
      'prodClass','polNo','lifePolNo','applicantName',
      'idNo','giOptOut','lifeOptOut','currentAgentName',
      'currentAgentCode','currentAgentPhone','dateOfSubmission',
      'campaignCode','assignmentType',
      'preferredAgentName', 'preferredAgentPhone',
      'agentInfo',
      'agentSentDate','customerSentDate'],

    DetailSearchRecordColumnName:["Agent Code","Agent Name","Email Address","Agent Phone",
        "Last Assignment Date","Assign", "On Leave"],

    DetailSearchRecordColumnField:["agentCode","agentName","email",
    "agentPhone","lastAssignDate","assign", "onLeave"],

    DetailSearchRecordOldPoolTypeColumnName:["Agent Code","Agent Name","Email Address","Agent Phone",
        "Last Assignment Date","Assign"],

    DetailSearchRecordOldPoolTypeColumnField:["agentCode","agentName","email",
    "agentPhone","lastAssignDate","assign"],

    AgentInterfaceColumnField:["customerInfo", "phone", "email", "submissionDt", "prod",
    "agentAssignmentDt", "firstContactDt", "assignmentInfo", "applicationExt",
    "csRemarks", "upsellLifePolNo", "upsellLifeProd", "afyp"],

    APUplineInterfaceColumnField:["agentCd", "agentName", "assignmentDt", "assignmentStatus", "noOfLeads"],

    AOInterfaceColumnField:["agentCode", "customerInfo", "phone", "email", "submissionDt", "prod",
    "agentAssignmentDt", "firstContactDt", "assignmentInfo", "applicationExt",
    "csRemarks", "upsellLifePolNo", "upsellLifeProd", "afyp"],

    EDMListColumnField:["template", "communicationCode", "campaignTitle",
     "lastEdit", "sentTime", "action"],

    EDMStep2Field:["checkbox", "customerName", "gender", "email", "birthYear","birthMonth",
    "campaignCd", "partnerCd", "partnerName", "assignmentType", "dateOfSubmission"],

    EDMHistoryCustomerField:["customerName","email","status","sentTime"],

    EDMHistoryCustomer:["Customer Name", "Email Address", "Status", "Sent Time"],

    PDDList:["Application Date","Agent Name","Agent Code","Customer Name","Customer Phone no.",
    "Customer email","Assignment Date","First Contact Date","Approval Status","Remarks"],

    PDDListField:["submissionDt","agentName","agentCode","customerName","customerPhone",
    "customerEmail","agentAssignmentDt","firstContactDt","approvalStatus","remarks"],

    PDDSummary:["Customer Name", "Customer Phone no.", "Customer email", "Submission date",
    "Product", "Agent Name", "Agent Code", "Date of Assignment", "First Contact Date",
    "Assignment Status", "Application of Extension", "CS Remarks", "Upsell Prulife Pol No",
    "Upsell Life Product", "APE (HK$)"],

    PDDSummaryField:["customerName", "customerPhone", "customerEmail", "submissionDt",
    "prodClass", "agentName", "agentCode", "assignmentDt", "firstContactDt",
    "assignmentStatus", "applicationExt", "csRemarks", "upsellLifePolNo",
    "upsellLifeProd", "ape"],

    NEW_POOL_TYPE: 1,
    OLD_POOL_TYPE: 2,
    ADDITIONAL_POOL_TYPE: 3,


    STATUS_CODE : {
      SUCCESS_CODE: "00000",
      NO_EMAIL_CODE:"00001",
      NO_SMS_CODE:"00002",
      NO_SMS_EMAIL_CODE:"00003",
      DUP_COMM_CODE: "00011",
      TEMP_MISS_CODE: "00012",
      REMARKS_EXCEED_MAX_LENGTH_CODE: "00013",
      NO_CUSTOMER_CHOSEN: "00014",
      POST_PDD_APPROVAL_FAIL: "00015"
    },

    MSG:{
      PRUCHAT_EMAIL_SUCCESS: "PruChat and email has been sent successfully",
      SMS_EMAIL_SUCCESS: "SMS and email has been sent successfully"
    }
};
