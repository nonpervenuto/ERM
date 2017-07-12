(function() {
    'use strict';
    angular
	.module('app')
	.factory('DesignerService', DesignerService);

	function DesignerService() {
		return {
			data: {
				dialect : "oracle",
				tables : [{
					name : 'Users',
					columns : [{
						name : "id",
						datatype : {
							type : "NUMBER",
							precision :  10,
							scale : 2
						}
					},
					{
						name : "eta",
						datatype : {
							type : "NUMBER",
							precision :  10,
							scale : 0
						}
					},
					{
						name : "via",
						datatype : {
							type : "VARCHAR2",
							size :  200
						}
					}],
					primaryKey : ["id"],
					foreingKeys : []
				},
				{
					name : 'Groups',
					columns : [{
						name : "id",
						datatype : {
							type : "NUMBER",
							precision :  10,
							scale : 2
						}
					},
					{
						name : "groupid",
						datatype : {
							type : "NUMBER",
							precision :  10,
							scale : 0
						}
					},
					{
						name : "groupName",
						datatype : {
							type : "VARCHAR2",
							size :  200
						}
					}],
					primaryKey : ["id"],
					foreingKeys : []
				}]
			}
		};
	}
})();
