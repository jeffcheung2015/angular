export default {
    localOrVm: 'local', //local || vm    [check all services, and guards/main.guard.ts]
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
      'prodClass','policyNo','birthDate',
      'idCardNo', 'gender', 'optOutCustomerGI',
      'optOutCustomerLife','campaignCode','agentCode',
      'agentName','agentPhone','agentAssignedDate',
      'firstContactDate','contactCustomer',
      'assignmentStatus', 'agentAccountExpiryDate',
      'pruchatEmailSendDate',
      'SMSEmailSendDate'],
    GISearchRecordColumnField: [
      'prodClass','polNo','lifePolNo','applicantName',
      'idNo','giOptOut','lifeOptOut','currentAgentName',
      'currentAgentCode','currentAgentPhone','dateOfSubmission',
      'campaignCode','assignmentType','agentTeam',
      'agentCode','agentName','agentPhone',
      'agentAssignedDate','agentSentDate','customerSentDate'],

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

    AOInterfaceColumnField:["customerInfo", "phone", "email", "submissionDt", "prod",
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

    PDDListField:["applicationDt","agentName","agentCode","customerName","customerPhone",
    "customerEmail","assignmentDt","firstContactDt","approvalStatus","remarks"],

    PDDSummary:["Customer Name", "Customer Phone no.", "Customer email", "Submission date",
    "Product", "Agent Name", "Agent Code", "Date of Assignment", "First Contact Date",
    "Assignment Status", "Application of Extension", "CS Remarks", "Upsell Prulife Pol No",
    "Upsell Life Product", "APE (HK$)"],

    PDDSummaryField:["customerName", "customerPhone", "customerEmail", "submissionDt",
    "prodClass", "agentName", "agentCode", "assignmentDt", "firstContactDt",
    "assignmentStatus", "applicationExt", "csRemarks", "upsellLifePolNo",
    "upsellLifeProd", "ape"],

    NEW_POOL_TYPE: 1,
    OLD_POOL_TYPE: 2
};
