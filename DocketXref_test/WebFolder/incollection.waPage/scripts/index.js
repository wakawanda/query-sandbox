
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var dataGrid2 = {};	// @dataGrid
	var go_filter = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	dataGrid2.onRowClick = function dataGrid2_onRowClick (event)// @startlock
	{// @endlock
		//update xref table
		var the_id;
		the_id = sources.groups.ID;
		sources.groupItems_Xref.query('GroupsID = :1',the_id);
			
	};// @lock

//Executes an "in" comparison
// @param haystack Datasource pointer.
// @param needle Entity collection. Used to filter datasource
// @param opts Object. Can pass onComplete callback and column key.
function inCollection( haystack, needle, opts )
{
    //declare
    var needle_arr, filtered, actual_needle, collection, column, callback ;
   	
   	//get column comparison object
   	column = opts.column;
    //get callback
    callback = opts.callback;
    
	actual_needle = [];
	
    //convert needle collection to array for in clausevar test = true;
	needle.forEach(
	{
		onSuccess:function(e)
		{
		 	console.log(e.entity);
	    	collection = e.entity[column[1]];
	    	
		    actual_needle.push( collection.getValue() );


		 }
		 , atTheEnd:function(e)
		 {
		 	
			console.log(actual_needle);
		    //run query
		    filtered = haystack.query( column[0] + " in :1", actual_needle );
		    console.log(filtered);
		 }
    });
    return true;
}

	go_filter.click = function go_filter_click (event)// @startlock
	{// @endlock
		//use 23762
		// Add your code here
		var filtered, search;
		filtered = inCollection(sources.dockets, sources.groupItems_Xref.getEntityCollection(), {column:["ID","RecordID"],callback:function(){console.log("DONE");}} );
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("dataGrid2", "onRowClick", dataGrid2.onRowClick, "WAF");
	WAF.addListener("go_filter", "click", go_filter.click, "WAF");
// @endregion
};// @endlock
