var AdminData=AdminData||{};AdminData.jsUtil={confirm:function(t){window.confirm(t)},buildOptionsFromArray:function(t,r){r.append($("<option />"));for(i in t)$("<option />").text(t[i][0]).attr("value",t[i][1]).appendTo(r);r.attr("disabled",!1)},colorizeRows:function(){$(".colorize tr:odd").addClass("odd"),$(".colorize tr:even").addClass("even")},dateToString:function(t){var r=(t.getMonth()+1).toString(),n=t.getDate().toString();1==n.length&&(n="0"+n);var e=["January","February","March","April","May","June","July","August","September","October","November","December"];return n+"-"+e[r-1]+"-"+t.getFullYear()},randomNumber:function(){var t=1e8,r=1,n=r+Math.random()*(t-r);return Math.round(n)}};