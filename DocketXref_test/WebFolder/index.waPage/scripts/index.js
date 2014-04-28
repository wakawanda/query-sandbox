
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var go_search = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	go_search.click = function go_search_click (event)// @startlock
	{// @endlock
		var search = $$('search').getValue();
		console.log(search);
		sources.invDckt_Xref.query('DocketsID_d_5_ID.Title == :1 or Inventor_PeopleID_n_6_ID.FirstName == :1 or Inventor_PeopleID_n_6_ID.LastName == :1'
		,'*'+search+'*');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("go_search", "click", go_search.click, "WAF");
// @endregion
};// @endlock
