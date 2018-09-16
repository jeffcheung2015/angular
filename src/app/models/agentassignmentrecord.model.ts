export interface AgentAssignmentRecord {
	productClass: string;
	policyNo: string;
	prulifePolicyNo: string;
	applicantName: string;
	idCardno: string;
	optOutCustomerGI: string;
	optOutCustomerLife: string;

	currentAgent_AgentName: string;
	currentAgent_AgentCode: string;
	currentAgent_AgentPhone: string;

	dateOfSubmission: string;
	campaignCode: string;
	assignmentType: string;

	assignAgent_AgencyTeamName: string;
	assignAgent_AgencyCode: string;
	assignAgent_AgencyName: string;
	assignAgent_AgencyPhone: string;
	assignAgent_AgentAssignedDate: string;

	pruChatEmailSendDate: string;
	smsEmailSendDate: string;

}
