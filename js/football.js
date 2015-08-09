$(document).ready(function(){
	$.getJSON('http://101.251.229.158:8686?callback=?',function(data){
		console.log(data);
        $.hai1222addhtml(data);
	});

	$('.btn').click(function(){
        var j_date = $("#j_date").val();
        if(j_date == ''){
            alert('请输入正确日期!');
            return false;
        }
        var url = "http://101.251.229.158:8686?date=" + j_date + "&check=?";
        $.getJSON(url,function(data){
            console.log(data);
            $.hai1222addhtml(data);
        })
	});

    $.hai1222addhtml = function(data){
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
            '<td><button class="delete">删除</button></td>' +
            '</tr>';
        }
        $('.table tbody').html("").html(addhtml);
        $('.table tbody').html(addhtml);
    };

    $(document).on('click','.delete',function(){
        $(this).parent().parent().remove();
    })
})