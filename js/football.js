$(document).ready(function(){
	$.getJSON('http://101.251.229.158:8686?callback=?',function(data){
		console.log(data);
		var len = data.length;
		var addhtml = '';
		for(var i = 0;i < len;i++){
			addhtml += '<tr>'+
				'<td>' + data[i].zhu + '</td>' + 
				'<td>' + data[i].ke + '</td>' + 
				'<td>' + data[i].liansai + '</td>' + 
				'<td>' + data[i].quan + '</td>' + 
				'<td>' + data[i].ban + '</td>' + 
				'<td>' + data[i].time + '</td>' + 
				'</tr>';
		}
		$('.table tbody').html("").html(addhtml);
		$('.table tbody').html(addhtml);
	});

	$('.btn').click(function(){

	});
})