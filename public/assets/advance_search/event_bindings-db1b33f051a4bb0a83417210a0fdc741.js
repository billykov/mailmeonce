var AdminData=AdminData||{};AdminData.bindings={col2_change:function(a){var e=["is_false","is_true","is_null","is_not_null"],t=$(a.target).closest("select"),n=t.val(),i=$("#advance_search_table").data("table_structure"),c=t.parents("tr").find("td input.col3"),l=t.parents("tr").find("td select.col1"),r=i[l.val()];0===n.length||$.inArray(n,e)>-1?c.val("").attr("disabled","disabled"):(c.removeAttr("disabled"),"datetime"===r||"date"===r?(c.val(AdminData.jsUtil.dateToString(new Date)).addClass("datepicker"),$(".datepicker").datepicker({dateFormat:"dd-MM-yy",changeYear:!0,changeMonth:!0})):($(".datepicker").datepicker("destroy"),c.removeClass("datepicker").focus()))},pagination_click:function(a){var e=$(a.target).closest("a").attr("href");$.ajax({url:e,dataType:"text",success:function(a){$("#results").html(a)}}),AdminData.jsUtil.colorizeRows()},col1_change:function(a){var e=$(a.target).closest("select"),t=$("#advance_search_table").data("table_structure"),n=t[e.val()],i=AdminData.mappings[n].options,c=e.parents("tr").find("td select.col2");c.html(""),AdminData.jsUtil.buildOptionsFromArray(i,c),c.trigger("change").removeAttr("disabled")}},$(".pagination a").live("click",function(a){return AdminData.bindings.pagination_click(a),!1}),$("#advance_search_table a.add_row_link").live("click",function(){return $("#advance_search_table").append(AdminData.advanceSearch.buildRow()),!1}),$("#advance_search_table a.remove_row").live("click",function(a){return $(a.target).closest("tr").remove(),!1}),$("#advance_search_table select.col1").live("change",function(a){AdminData.bindings.col1_change(a)}),$("#advance_search_table select.col2").live("change",function(a){AdminData.bindings.col2_change(a)});