var jira = 'https://credico.jira.com/browse/';
var pattern = /([A-Z]{2,}-\d+)/g;

$('h2.content-title').each(function()
{
	var self = $(this);
	if(self.attr("tagName") == 'A') { return; }
	
	var match = pattern.exec(self.text());  
	if(match[1]) {
		self.html($(this).text().replace(
			pattern,
			' <a target="_blank" href="'+jira+match[1]+'">'+match[1]+'</a>'
		));
		
	}
	
		
});