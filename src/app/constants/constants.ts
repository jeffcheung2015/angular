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

    },
    SearchRecordColumnName: [
    'Class', 'Policy No.', 'Prulife Pol. No.', 'Name of the Applicant',
    'ID Card No', 'Opt Out customer(GI)', 'Opt Out customer(Life)',
    'Agent Name','Agent Code','Agent Phone',
    'Date Of Submission', 'Campaign Code', 'Assignment Type',
    'Agency Team Name', 'Agency Code', 'Agent Name', 'Agent Phone', 'Agent Assigned Date',
    'PruChat,Email Send Date(to agent)', 'SMS,Email Send Date(to customer)/ View Customer Email'],
    SearchRecordColumnField: [
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



};
