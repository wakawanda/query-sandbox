
//model to modify selection with find by

//selection A, selection B, filter_name, action
// filter_name and action are interchangeable, filtername takes priority, if it exists

var filterManager = function( opts )
{
  //add private entities to var here.
  var options, go_debug, debug, valid_filters, default_action;
  valid_filters = [];
  default_action = "add";
  this.options = opts;
  go_debug = true;

  function filter_manager(opts)
  {
    //set any private methods here

    debug = function(m)
    {
      //checks if go_debug is true
      if ( go_debug )
      {
        //use passed in debug callback
        if ( options.debug )
        {
          options.debug(m);
        }
        else
        {
          //checks if console exists
          if ( window.console )
          {
            console.log("");
            console.log("--- DEBUG ---");
            console.log("");
            console.log(m);
            console.log("");
            console.log("--- /DEBUG ---");
            console.log("");

          }
        }
      }
  	}
  }

  //add prototypes here
	filter_manager.prototype.init = function()
	{
		var filter_name, action;
		filter_name = ( opts.hasOwnProperty("filter_name") && opts.filter_name )? opts.filter_name : false ;
		action = ( opts.hasOwnProperty("action") && opts.action )? opts.action : default_action ;
		
		//check filtername
		if ( filter_name )
		{
			//filter name is set, check if it is a valid filter name
			if ( $.inArray(filter_name, valid_filters) )
			{
				//filter is valid, run filter action
				this.execFilter();
			}
			else
			{
				//filter not valid, use action
				this.execAction();
			}
		}
		else
		{
			//filter name is undefined
			this.execAction();
			
		}

	}
	
	//executes the filter method of a table
	filter.prototype.execFilter = function()
	{
		
		
	}
	
	//executes a collection method on a set of selections
	filter.prototype.execAction = function()
	{
		
		
	}

  return filter_manager;

}();