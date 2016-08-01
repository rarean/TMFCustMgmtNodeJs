module.exports = {
  creditPaymentMean: creditPaymentMean,
  bankPaymentMean: bankPaymentMean,
	customerAccount: customerAccount,
  customer: customer
};

var creditPaymentMean = {
	id: '64',
	href: 'http://serverlocation:port/customerManagement/paymentMean/64',
	name: 'my credit card payment mean',
	validFor: {
		startDateTime: '2013-04-19T20:42:23.0Z',
		endDateTime: '2013-06-19T04:00:00.0Z'
	},
	type: 'credit',
	relatedParty: {
		id: '1',
		href: 'http://serverlocation:port/partyManagement/individual/1',
		role: 'customer',
		name: 'John Doe'
	},
	creditCard: {}
};

var bankPaymentMean = {
	id: '45',
	href: 'http://serverlocation:port/customerManagement/paymentMean/45',
	name: 'my credit card payment mean',
	validFor: {
		startDateTime: '2013-04-19T20:42:23.0Z',
		endDateTime: '2013-06-19T04:00:00.0Z'
	},
	type: 'bank',
	relatedParty: {
		id: '1',
		href: 'http://serverlocation:port/partyManagement/individual/1',
		role: 'customer',
		name: 'John Doe'
	},
	bankAccount: {}
};
var customer = {
	id: 'c1234',
	href: 'http://serverlocation:port/customerManagement/customer/c1234',
	name: 'DisplayName',
	status: 'Active',
	description: 'Description string',
	validFor: {
		startDateTime: '2013-06-19T04:00:00.0Z',
		endDateTime: '2013-04-19T20:42:23.0Z'
	},
	customerRank: '3',
	relatedParty: {
		id: '1',
		href: 'http://serverlocation:port/partyManagement/individual/1',
		role: 'customer',
		name: 'John Doe'
	},
	characteristic: [
		{
			name: 'characteristicname1',
			value: 'characteristicvalue1'
		},
		{
			name: 'characteristicname2',
			value: 'characteristicvalue2'
		}
	],
	contactMedium: [
		{
			type: 'Email',
			validFor: {
				startDateTime: '2013-04-19T20:42:23.0Z'
			},
			medium: {
				emailAddress: 'abc@tmforum.com'
			}
		},
		{
			type: 'PostalAddress',
			validFor: {
				startDateTime: '2013-04-19T20:42:23.0Z'
			},
			medium: {
				city: 'Wien',
				country: 'Austria',
				postcode: '1020',
				stateOrProvince: 'Quebec',
				street1: 'Lassallestrasse7',
				street2: ''
			}
		},
		{
			type: 'TelephoneNumber',
			validFor: {
				startDateTime: '2013-04-19T20:42:23.0Z'
			},
			medium: {
				type: 'mobile',
				number: '+436641234567'
			}
		},
		{
			preferred: true,
			type: 'TelephoneNumber',
			validFor: {
				startDateTime: '2013-04-19T20:42:23.0Z'
			},
			medium: {
				type: 'business',
				number: '+436641234567'
			}
		}
	],
	customerAccount: [
		{
			id: '1',
			href: 'http://serverlocation:port/customerManagement/customerAccount/1',
			name: 'CustomerAccount1',
			description: 'CustomerAccountDesc1',
			status: 'Active'
		},
		{
			id: '2',
			href: 'http://serverlocation:port/customerManagement/customerAccount/2',
			name: 'CustomerAccount2',
			description: 'CustomerAccountDesc2',
			status: 'Active'
		}
	],
	customerCreditProfile: [
		{
			creditProfileDate: '2013-04-19T20:42:23.0Z',
			validFor: {
			startDateTime: '2013-04-19T20:42:23.0Z',
			endDateTime: '2013-06-19T04:00:00.0Z'
		},
			creditRiskRating: 1,
			creditScore: 1
		},
		{
			creditProfileDate: '2013-04-19T20:42:23.0Z',
			validFor: {
				startDateTime: '2013-04-19T20:42:23.0Z',
				endDateTime: '2013-06-19T04:00:00.0Z'
			},
			creditRiskRating: 1,
			creditScore: 1
		}
	],
	paymentMean: [
		{
			id: '45',
			href: 'http://serverlocation:port/customerManagement/paymentMean/45',
			name: 'my favourite payment mean'
		},
		{
			id: '64',
			href: 'http://serverlocation:port/customerManagement/paymentMean/64',
			name: 'my credit card payment mean'
		}
	]
};
var customerAccount = {
			id: '1',
			href: 'http://serverlocation:port/customerManagement/customerAccount/1',
			name: 'CustomerAccount1',
			description: 'CustomerAccountDesc1',
			status: 'Active',
      accountType: 'customer',
      creditLimit: '1000',
      pin: '1234',
      receivableBalance: 2.0,
      customerAccountTaxExemption: [
			  {
					issuingJurisdiction: 'bank',
					certificateNumber: '456',
					reason: 'because i want to',
					validFor: {
						startDateTime: '2013-04-19T20:42:23.0Z',
						endDateTime: '2013-06-19T04:00:00.0Z'
					}
				}
			],
      customerAccountRelationship: [
				{
					relationshipType: 'customer',
					validFor: {
						startDateTime: '2013-04-19T20:42:23.0Z',
						endDateTime: '2013-06-19T04:00:00.0Z'
					},
					customerAccount: [
					  {
							id: '1',
							href: 'http://serverlocation:port/customerManagement/customerAccount/1',
							name: 'CustomerAccount1',
							description: 'CustomerAccountDesc1',
							status: 'Active'
						}
					]
				}
			],
      contact: [
			  {
					contactType: 'main',
					validFor: {
						startDateTime: '2013-04-19T20:42:23.0Z',
						endDateTime: '2013-06-19T04:00:00.0Z'
					},
					contactName: 'John Doe',
					partyRoleType: 'customer',
					contactMedium: [
						{
							type: 'Email',
							validFor: {
								startDateTime: '2013-04-19T20:42:23.0Z'
							},
							medium: {
								emailAddress: 'abc@tmforum.com'
							}
						},
						{
							type: 'PostalAddress',
							validFor: {
								startDateTime: '2013-04-19T20:42:23.0Z'
							},
							medium: {
								city: 'Wien',
								country: 'Austria',
								postcode: '1020',
								stateOrProvince: 'Quebec',
								street1: 'Lassallestrasse7',
								street2: ''
							}
						}
					],
					relatedParty: {
						id: '1',
						href: 'http://serverlocation:port/partyManagement/individual/1',
						role: 'customer',
						name: 'John Doe'
					}
				}
			],
      customer: {
				id: 'c1234',
				href: 'http://serverlocation:port/customerManagement/customer/c1234',
				name: 'DisplayName',
				description: 'Description string',
			},
      customerAccountBalance: [
			  {
					type: 'bank',
					amount: 2.0,
					validFor: {
						startDateTime: '2013-04-19T20:42:23.0Z'
					},
					status: 'active'
				}
			],
      paymentPlan: [
				{
					status: 'active',
					type: 'bank',
					priority: '1',
					amount: 2.0,
					paymentFrequency: 'monthly',
					numberOfPayments: '1',
					validFor: {
						startDateTime: '2013-04-19T20:42:23.0Z'
					},
					paymentMean: {
						id: '45',
						href: 'http://serverlocation:port/customerManagement/paymentMean/45',
						name: 'my favourite payment mean'
					}
				}
			],
      lastModified: '2013-04-19T20:42:23.0Z'
};
