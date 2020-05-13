$(document).ready(function(){
	//Create
	$('#add-todo').click(function(e){
		// console.log('do');
		var todoItem = prompt('What do you add?');
		
		var cloneli = $('li').eq(0).clone();
		cloneli.find('.content').text(todoItem);
		$('#todo-list').append(cloneli);
	});


	//Update
	$('#todo-list').on('dblclick', '.content', function (e) {
		$(this).closest('li').addClass('editing');
		$(this).siblings('[type="text"]').focus();
	});

	$('#todo-list').on('blur', '[type="text"]', function (e) {
		var newContent = $(this).val();
		$(this).siblings('.content').text(newContent);
		$(this).closest('li').removeClass('editing');
	});

	//Delete
	$('#todo-list').on('click', '[data-action="delete"]', function (e){
		var result = confirm('Are you sure you want to delete?');
		if(result){
			$(this).closest('li').remove();
		}
	})

	//complete
	$('#todo-list').on('click','li [type="checkbox"]', function (e){
		$(e.currentTarget).siblings('.content').toggleClass('finish');
	});
	
});
