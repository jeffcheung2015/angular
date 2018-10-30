export default {
    localOrVm: 'local', //local || vm
    route:{
      //agent assignment
      AgentAssignGI: 'easAgentAssignGI',
      AgentAssignCS: 'easAgentAssignCS',
      AgentDetail: 'easAgentDetail',
      CampaignDetail: 'easCampaignDetail',
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
    'applicantName','emailAddr','mobileNo','submissionDate',
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

    AgentInterfaceColumnField:["customerInfo", "phone", "email", "submissionDt", "prod",
    "agentAssignmentDt", "firstContactDt", "assignmentInfo", "applicationExt",
    "csRemarks", "upsellLifePolNo", "upsellLifeProd", "afyp"],

    APUplineInterfaceColumnField:["agentCd", "agentName", "assignmentDt", "assignmentStatus", "noOfLeads"],

    AOInterfaceColumnField:["customerInfo", "phone", "email", "submissionDt", "prod",
    "agentAssignmentDt", "firstContactDt", "assignmentInfo", "applicationExt",
    "csRemarks", "upsellLifePolNo", "upsellLifeProd", "afyp"],

    EDMListColumnField:["template", "communicationCode", "campaignTitle",
     "lastEdit", "sentTime", "action"],

};
